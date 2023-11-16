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
    <!-- 环境光 -->
    <TresDirectionalLight :position="[0, 2, 4]" :intensity="1.2" cast-shadow />
  </TresCanvas>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from 'three'

const gl = {
  clearColor: '#82DBC5',
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
}
</script>
