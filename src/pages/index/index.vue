<template>
  <!-- loading -->
  <Loading
    v-if="showLoading"
    :is-finished="hasFinishLoading"
    :progress="progress"
    @onStart="handleStart"
  />
  <!-- Scene -->
  <TresCanvas ref="tresCanvas" v-bind="config">
    <!-- 透视相机 -->
    <TresPerspectiveCamera :position="[-14.84, 8.0, -2.24]" :rotation="[-1.81, -1.11, -1.84]" />
    <!-- 轨道控制器 -->
    <OrbitControls />
    <!-- Ramen Hologram -->
    <Suspense>
      <RamenHologram />
    </Suspense>
    <!-- Ramen Shop -->
    <Suspense v-for="node in ramenShop.nodes" :key="node.name">
      <primitive :object="node" />
    </Suspense>
  </TresCanvas>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { TresCanvas, useRenderLoop, useTexture } from '@tresjs/core'
import { OrbitControls, useGLTF, useProgress } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

import sources from './sources'
import { playSound } from './playSounds'
import Loading from './components/Loading.vue'
import RamenHologram from './components/RamenHologram.vue'

import bigScreenVertexShader from '@/assets/shaders/bigScreenShaders/vertex.glsl'
import bigScreenFragmentShader from '@/assets/shaders/bigScreenShaders/fragment.glsl'

const config = {
  clearColor: '#000',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const showLoading = ref(true)
const { hasFinishLoading, progress } = await useProgress()

const { onLoop } = useRenderLoop()
const tresCanvas = ref<InstanceType<typeof TresCanvas> | null>(null)
const { setDetectSupport, loadKTX2Texture, getKTX2Texture } = useKTX2TextureLoader()

const ramenShop = await useGLTF(
  '/static/models/ramenShop/glTF/ramenShop.gltf',
  { draco: true },
)

onLoop(({ elapsed }) => {
  ramenShop.nodes.fan1.rotation.y = -elapsed * 3
  ramenShop.nodes.fan2.rotation.y = -elapsed * 3
  ramenShop.nodes.dish.rotation.y = Math.sin(elapsed * 0.5) * 0.4 - Math.PI * 0.2
  if (ramenShop.nodes.bigScreen.material?.uniforms) {
    ramenShop.nodes.bigScreen.material.uniforms.uTime.value = -elapsed
  }
  if (ramenShop.nodes.vendingMachineScreen.material?.uniforms) {
    ramenShop.nodes.vendingMachineScreen.material.uniforms.uTime.value = -elapsed
  }
})

async function setRamenShopMaterial() {
  setDetectSupport(tresCanvas.value!.context.renderer.value)

  for (const key in ramenShop.nodes) {
    const source = sources.find(item => item.name === key)
    if (!source) {
      console.warn(`未找到 ${key} 的资源`)
      continue
    }
    if (source.name === 'vendingMachineScreen') {
      getKTX2Texture(source.path!).then((texture) => {
        ramenShop.nodes[key].material = new THREE.ShaderMaterial({
          vertexShader: bigScreenVertexShader,
          fragmentShader: bigScreenFragmentShader,
          uniforms: {
            uTime: { value: 0 },
            uXOffset: { value: 0.421 },
            uYOffset: { value: 0.522 },
            uRadialThickness: { value: 4.0 },
            uSpeed: { value: 0.3 },
            uLightColor: { value: new THREE.Color('#34fe81') },
            uDarkColor: { value: new THREE.Color('#386aff') },
            uDefaultTexture: { value: texture },
            uTexture1: { value: null },
            uTexture2: { value: null },
            uProgress: { value: 0 },
            uTexture1IsDefault: { value: 1.0 },
            uTexture2IsDefault: { value: 0 },
          },
        })
      })
    }
    else if (source.name === 'bigScreen') {
      getKTX2Texture(source.path!).then((texture) => {
        ramenShop.nodes[key].material = new THREE.ShaderMaterial({
          vertexShader: bigScreenVertexShader,
          fragmentShader: bigScreenFragmentShader,
          uniforms: {
            uTime: { value: 0 },
            uXOffset: { value: 0.268 },
            uYOffset: { value: 0.648 },
            uRadialThickness: { value: 4.0 },
            uSpeed: { value: 0.3 },
            uLightColor: { value: new THREE.Color('#00FFF0') },
            uDarkColor: { value: new THREE.Color('#05a7bd') },
            uDefaultTexture: { value: texture },
            uTexture1: { value: null },
            uTexture2: { value: null },
            uProgress: { value: 0 },
            uTexture1IsDefault: { value: 1.0 },
            uTexture2IsDefault: { value: 0 },
          },
        })
      })
    }
    else if (source.type === 'color') {
      ramenShop.nodes[key].material = source.material
    }
    else if (source.type === 'texture') {
      const { map } = await useTexture({ map: source.path })
      ramenShop.nodes[key].material = new THREE.MeshBasicMaterial({ map })
    }
    else {
      loadKTX2Texture(ramenShop.nodes[key], source.type, source.path!)
    }
  }
}

async function handleStart() {
  showLoading.value = false

  await delayExecution(600)
  playSound('ding', 0.14)
}

onMounted(() => {
  setRamenShopMaterial()
})
</script>
