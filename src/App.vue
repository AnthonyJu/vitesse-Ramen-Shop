<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup lang="ts">
import { Howler } from 'howler'

const visibility = useDocumentVisibility()
watch(visibility, (value) => {
  if (value === 'visible') {
    Howler.mute(false)
  }
  else {
    Howler.mute(true)
  }
})
</script>
