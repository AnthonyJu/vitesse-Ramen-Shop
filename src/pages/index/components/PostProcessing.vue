<script setup lang='ts'>
import * as THREE from 'three'
import { useRenderLoop, useTresContext } from '@tresjs/core'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'

const { scene, camera, renderer } = useTresContext()
const { onLoop } = useRenderLoop()

renderer.value.setSize(window.innerWidth, window.innerHeight)

const bloomComposer = new EffectComposer(renderer.value)
const renderScene = new RenderPass(scene.value, camera.value!)
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.2,
  0,
  0.3,
)
const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight)
const outputPass = new OutputPass()

bloomComposer.addPass(renderScene)
bloomComposer.addPass(bloomPass)
bloomComposer.addPass(smaaPass)
bloomComposer.addPass(outputPass)

onLoop(() => {
  bloomComposer.render()
})
</script>
