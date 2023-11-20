<template>
  <TresCanvas clear-color="#82DBC5">
    <TresPerspectiveCamera ref="perspectiveCamera" :position="[18.9, 8.8, -16.4]" />
    <TresGridHelper :position="[0, -1, 0]" />
    <Box :scale="4" color="red" />
    <TresAmbientLight />
    <TresDirectionalLight :position="[0, 2, 4]" />
    <OrbitControls ref="orbitControls" :target="[0, 0, -1]" enable-damping />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { Box, OrbitControls } from '@tresjs/cientos'
import Gasp from 'gsap'
import type * as THREE from 'three'

const orbitControls = ref<InstanceType<typeof OrbitControls> | null>(null)
const perspectiveCamera = ref<InstanceType<typeof THREE.PerspectiveCamera> | null>(null)

setTimeout(() => {
  Gasp.to(
    perspectiveCamera.value!.position,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: -11.1,
      y: 1,
      z: 7.6,
    },
  )

  Gasp.to(
    orbitControls.value!.value!.target,
    {
      duration: 1.5,
      ease: 'power1.inOut',
      x: 0,
      y: 0,
      z: -1,
    },
  )
}, 3000)
</script>
