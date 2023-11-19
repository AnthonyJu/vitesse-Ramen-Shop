<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup lang="ts">
import { howler } from 'howler'

const visibility = useDocumentVisibility()
watch(visibility, (value) => {
  if (value === 'visible') {
    howler.mute(false)
  }
  else {
    howler.mute(true)
  }
})
</script>
