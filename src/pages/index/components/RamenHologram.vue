<template>
  <primitive
    :object="hologramBase"
    :position="[-0.13, 5.16, -0.95]"
    :rotation-x="Math.PI * -0.5"
  />
  <Sphere :args="[1.2, 8, 8]" :position="[-0.1, 7, -0.95]" @click="breakHologram">
    <TresMeshBasicMaterial :transparent="true" :opacity="0" />
  </Sphere>
</template>

<script setup lang='ts'>
import * as THREE from 'three'
import { Sphere, useGLTF } from '@tresjs/cientos'
import { useRenderLoop, useTresContext } from '@tresjs/core'
import { playSound } from '../playSounds'

import hologramVertexShader from '@/assets/shaders/hologramShaders/vertex.glsl'
import hologramFragmentShader from '@/assets/shaders/hologramShaders/fragment.glsl'

const { scene } = useTresContext()
const { onLoop } = useRenderLoop()

const hologramBase = new THREE.Mesh(new THREE.CircleGeometry(0.68, 32), new THREE.ShaderMaterial({
  vertexShader: hologramVertexShader,
  fragmentShader: hologramFragmentShader,
  transparent: true,
  uniforms: {
    uTime: { value: 0 },
    uBigGridThickness: { value: 0.13 },
    uLittleGridThickness: { value: 0.1 },
    uBigGridFrequency: { value: 8.0 },
    uLittleGridFrequency: { value: 24.0 },
    uSpeed: { value: 0.8 },
    uColor: { value: new THREE.Color('#42f2ff') },
  },
}))

const ramenHologram = await useGLTF(
  '/static/models/ramenShop/glTF/ramenHologram.gltf',
  { draco: true },
)

const hologramData = {
  mesh: new THREE.Points(),
  verticesDown: 0,
  verticesUp: 0,
  direction: 1,
  speed: 5,
  delay: 1000,
  count: 0,
}

let positions = combineBuffer()
createMesh(positions)
setTimeout(raiseHologram, 100)

function combineBuffer() {
  let offset = 0
  let buffer = null
  let totalCount = 0
  let combined: THREE.TypedArray | null = null

  ramenHologram.scene.traverse((child) => {
    if (child.type === 'Mesh') {
      buffer = (child as THREE.Mesh).geometry.attributes.position
      totalCount += buffer.array.length
    }
  })

  combined = new Float32Array(totalCount)

  ramenHologram.scene.traverse((child) => {
    if (child.type === 'Mesh') {
      buffer = (child as THREE.Mesh).geometry.attributes.position
      combined!.set(buffer.array, offset)
      offset += buffer.array.length
    }
  })

  return new THREE.BufferAttribute(combined, 3)
}

function createMesh(positions: THREE.BufferAttribute) {
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', positions.clone())
  geometry.setAttribute('initialPosition', positions.clone());

  (geometry.attributes.position as THREE.BufferAttribute).setUsage(
    THREE.DynamicDrawUsage,
  )

  const mesh = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ size: 0.01, color: new THREE.Color(0x00FFFF) }),
  )

  mesh.position.set(-0.1, 5, -0.95)
  mesh.scale.set(0.0225, 0.0225, 0.0225)

  scene.value.add(mesh)

  hologramData.mesh = mesh
}

function updatePositions(delta: number) {
  // Mesh drop and Rise
  positions = hologramData.mesh.geometry.attributes.position as THREE.BufferAttribute
  const initialPositions = hologramData.mesh.geometry.attributes.initialPosition

  hologramData.count = positions.count

  for (let i = 0; i < hologramData.count; i++) {
    const px = positions.getX(i)
    const py = positions.getY(i)
    const pz = positions.getZ(i)

    // falling down
    if (hologramData.direction < 0) {
      if (py > 0) {
        positions.setXYZ(
          i,
          px + 1.5 * (0.50 - Math.random()) * hologramData.speed * delta * 10,
          py + 3.0 * (0.25 - Math.random()) * hologramData.speed * delta * 10,
          pz + 1.5 * (0.50 - Math.random()) * hologramData.speed * delta * 10,
        )
      }
      else {
        hologramData.verticesDown += 1
      }
    }
    // rising up
    else {
      const ix = initialPositions.getX(i)
      const iy = initialPositions.getY(i)
      const iz = initialPositions.getZ(i)

      const dx = Math.abs(px - ix)
      const dy = Math.abs(py - iy)
      const dz = Math.abs(pz - iz)

      const d = dx + dy + dx

      if (d > 1) {
        positions.setXYZ(
          i,
          px - (px - ix) / dx * hologramData.speed * delta * (0.85 - Math.random()) * 10,
          py - (py - iy) / dy * hologramData.speed * delta * (1 + Math.random()) * 10,
          pz - (pz - iz) / dz * hologramData.speed * delta * (0.85 - Math.random()) * 10,
        )
      }
      else {
        hologramData.verticesUp += 1
      }
    }
  }

  // all vertices down (go up)
  if (hologramData.verticesDown >= hologramData.count) {
    if (hologramData.delay <= 0) {
      hologramData.direction = 1
      hologramData.speed = 5
      hologramData.verticesDown = 0
      hologramData.delay = 1000
    }
    else {
      hologramData.delay -= 1
    }
  }

  // 更新
  positions.needsUpdate = true
}

async function raiseHologram() {
  if (hologramData.verticesDown >= hologramData.count) {
    hologramData.direction = 1
    hologramData.speed = 5
    hologramData.verticesDown = 0
    hologramData.delay = 1000
  }
}

function breakHologram() {
  if (hologramData.verticesUp >= hologramData.count) {
    playSound('hologram')
    hologramData.direction = -1
    hologramData.speed = 15
    hologramData.verticesUp = 0
    hologramData.delay = 50
  }
}

onLoop(({ delta, elapsed }) => {
  hologramData.mesh.rotation.y += -0.25 * delta
  if (hologramBase) {
    hologramBase.material.uniforms.uTime.value = -elapsed
  }
  updatePositions(delta)
})
</script>
