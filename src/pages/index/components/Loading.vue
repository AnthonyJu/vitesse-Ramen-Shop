<template>
  <div class="overlay" :class="fadeOVerlay ? 'fade' : ''">
    <div id="cooking" :class="hideCooking ? 'animate-fade-out' : 'animate-fade-in'">
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
      <div class="bubble" />
      <div id="area">
        <div id="sides">
          <div id="pan" />
          <div id="handle" />
        </div>
        <div id="pancake">
          <div id="pastry" />
          <div id="pastry2" />
          <div id="pastry3" />
        </div>
      </div>
      <h1>Cooking Your Ramen... {{ progress }}%</h1>
    </div>
    <button
      class="start cursor-pointer"
      :class="showDiningBtn ? 'animate-fade-in block' : ''"
      @click="handleStart"
    >
      Dining
    </button>
  </div>
</template>

<script setup lang='ts'>
import { playSound } from '../playSounds'

const props = defineProps<{
  progress: number
  isFinished: boolean
}>()

const emit = defineEmits<{
  (e: 'onStart'): void
}>()

const fadeOVerlay = ref(false)
const hideCooking = ref(false)
const showDiningBtn = ref(false)
const time = new Date().getTime()

watch(() => props.isFinished, (vale) => {
  if (!vale) return
  const delate = new Date().getTime() - time
  if (delate < 1000) {
    setTimeout(hideCookingFn, 1000 - delate)
  }
  else hideCookingFn()
})

async function hideCookingFn() {
  hideCooking.value = true

  await delayExecution(1000)
  showDiningBtn.value = true
  document.getElementById('cooking')?.remove()
}

async function handleStart() {
  fadeOVerlay.value = true

  playSound('click', 0.3)
  playSound('whoosh', 0.6)
  playSound('cooking', 0.1, true)

  emit('onStart')
}
</script>
