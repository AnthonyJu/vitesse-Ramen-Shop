<template>
  <TresCanvas v-bind="gl">
    <!-- 透视相机 -->
    <TresPerspectiveCamera :position="[9, 9, 9]" />
    <!-- 轨道控制器 -->
    <OrbitControls />
    <!-- 网格 -->
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <!-- Ramen -->
    <Suspense>
      <primitive :object="ramenShop.scene" />
    </Suspense>
    <Suspense>
      <primitive :object="ramenHologram.scene" />
    </Suspense>
    <!-- 环境光 -->
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls, useGLTF } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}

const ramenShop = await useGLTF('/static/models/ramenShop/glTF/ramenShop.gltf', { draco: true })
const ramenHologram = await useGLTF('/static/models/ramenShop/glTF/ramenHologram.gltf', { draco: true })
</script>
