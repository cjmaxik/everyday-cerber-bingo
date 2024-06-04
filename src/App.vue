<template>
  <router-view />
</template>

<script setup>
import { watch } from 'vue'

import { useGameSettingsStore } from 'src/stores/gameSettings'
const settings = useGameSettingsStore()

// watch for font setting changes
watch(settings, (settings) => {
  if (settings.removeFont) {
    document.body.classList.remove('cerber-font')
  } else {
    document.body.classList.add('cerber-font')
  }
})
</script>
