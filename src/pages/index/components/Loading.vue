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
      v-show="showStartBtn"
      class="start cursor-pointer"
      :class="showStartBtn ? 'animate-fade-in block' : ''"
      @click="handleStart"
    >
      START
    </button>
  </div>
</template>

<script setup lang='ts'>
const props = defineProps<{
  progress: number
  isFinished: boolean
}>()

const emit = defineEmits<{
  (e: 'onStart'): void
}>()

const fadeOVerlay = ref(false)
const hideCooking = ref(false)
const showStartBtn = ref(false)
const time = new Date().getTime()

watch(() => props.isFinished, (vale) => {
  if (!vale) return
  const delate = new Date().getTime() - time
  if (delate < 1000) {
    setTimeout(hideCookingFn, 1000 - delate)
  }
  else hideCookingFn()
})

function hideCookingFn() {
  hideCooking.value = true
  setTimeout(() => {
    showStartBtn.value = true
    document.getElementById('cooking')?.remove()
  }, 1000)
}

function handleStart() {
  fadeOVerlay.value = true
  setTimeout(() => {
    emit('onStart')
  }, 500)
}
</script>
