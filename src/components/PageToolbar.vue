<template>
  <q-header elevated>
    <q-toolbar class="bg-purrbert">
      <q-btn
        flat
        no-caps
        no-wrap
        padding="xs"
        to="/"
      >
        <q-avatar square>
          <img src="/icons/android-chrome-192x192.png">
        </q-avatar>

        <DefaultTransition>
          <q-toolbar-title
            v-show="$q.screen.gt.xs"
            shrink
          >
            Everyday <span class="text-weight-bold">Cerber</span> Bingo
          </q-toolbar-title>
        </DefaultTransition>
      </q-btn>

      <DefaultTransition>
        <q-chip
          v-show="settings.streamName"
          color="white"
          :ripple="false"
          style="user-select: none;"
          text-color="purrbert"
        >
          {{ realStreamName }}
        </q-chip>
      </DefaultTransition>

      <q-space />

      <DefaultTransition>
        <q-btn
          v-show="settings.streamName && $q.fullscreen.isCapable"
          dense
          fab-mini
          flat
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          stretch
          @click="goFullscreen()"
        >
          <q-tooltip
            anchor="bottom left"
            class="text-body2 bg-purrbert"
          >
            Fullscreen board
          </q-tooltip>
        </q-btn>
      </DefaultTransition>

      <DefaultTransition>
        <q-separator
          v-show="settings.streamName && $q.fullscreen.isCapable"
          vertical
        />
      </DefaultTransition>

      <SettingsPanel />

      <q-separator vertical />

      <AboutModalItem />
    </q-toolbar>
  </q-header>
</template>

<script setup>
// @ts-check

// vue related
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import SettingsPanel from './SettingsPanel.vue'
import AboutModalItem from 'components/AboutModalItem.vue'

// settings store
import { useGameSettingsStore } from 'stores/gameSettings'
const settings = useGameSettingsStore()

const realStreamName = ref(settings.streamName)
watch(settings, (settings) => {
  // leave as is! prevents animation jump
  if (settings.streamName) {
    realStreamName.value = settings.streamName
  }
})

// fullscreen stuff
const $q = useQuasar()

const goFullscreen = () => {
  $q.fullscreen.toggle(document.querySelector('div.bingo-card'))
}
</script>
