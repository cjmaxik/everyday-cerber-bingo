<template>
  <q-page class="index">
    <q-banner
      v-if="$route.query.from"
      class="bg-red text-white text-center shadow-10 shadow-transition rounded-borders"
    >
      <span class="text-h4">
        New domain: <a href="https://bingo.berber.uk">bingo.berber.uk</a>
      </span>
    </q-banner>

    <q-banner
      class="q-my-sm bg-purrbert text-white text-center shadow-5 shadow-transition rounded-borders"
      rounded
    >
      <span class="text-h4">
        Welcome to <br>Everyday <span class="text-weight-bold">Cerber</span> Bingo!
      </span>
    </q-banner>

    <StreamTypeItem
      v-if="upcoming"
      v-bind="upcoming"
      class="q-my-sm shadow-4 shadow-transition rounded-borders"
      :upcoming="true"
    />

    <q-stepper
      ref="stepper"
      v-model="step"
      animated
      class="bg-white shadow-3 shadow-transition"
      :class="{ 'q-mt-sm': !upcoming }"
      color="primary"
    >
      <q-step
        class="index-menu-step no-scroll"
        :done="step > 1"
        icon="profile"
        :name="1"
        title="Select character"
      >
        <div class="text-h5 q-my-sm text-center text-purrbert">
          Select character
        </div>

        <div class="row q-gutter-sm q-pa-sm">
          <IndexMenuButton
            v-for="char in indexMenu"
            :key="char.id"
            v-bind="char"
            @select-character="selectCharacter"
          />
        </div>
      </q-step>

      <q-step
        class="index-menu-step"
        :done="step > 2"
        icon="monitor"
        :name="2"
        title="Select stream"
      >
        <StreamTypeLinks
          v-bind="indexMenu[currentCharacter]"
          @return-to-selection="returnToSelection"
        />
      </q-step>
    </q-stepper>

    <div class="q-pt-sm text-center">
      <AboutModal :is-index="true" />
    </div>
  </q-page>
</template>

<script setup>
// @ts-check
import { ref } from 'vue'
import AboutModal from 'components/AboutModal.vue'
import StreamTypeLinks from 'components/StreamTypeLinks.vue'
import StreamTypeItem from 'components/StreamTypeItem.vue'
import IndexMenuButton from 'src/components/IndexMenuButton.vue'

import { upcoming, indexMenu } from 'conf/indexMenu'

// settings store
import { useGameSettingsStore } from 'stores/gameSettings'
const settings = useGameSettingsStore()
settings.streamName = null

// stepper ref
// TODO: remove if more characters
const step = ref(2)
const currentCharacter = ref('cerber')

/**
 * @param {string} character
 */
const selectCharacter = (character) => {
  currentCharacter.value = character
  step.value = 2
}

const returnToSelection = () => {
  step.value = 1
  currentCharacter.value = null
}
</script>
