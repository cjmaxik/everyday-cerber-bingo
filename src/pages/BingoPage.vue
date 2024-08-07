<template>
  <q-page
    class="bingo-page"
    padding
  >
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-if="!state.fullyReady && !error"
        :key="0"
        class="absolute-top"
      >
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img
              alt="Loading..."
              src="/assets/images/cerb.gif"
            >

            <h2 class="text-white no-margin">
              Stay tuned...
            </h2>
          </div>
        </div>
      </div>

      <q-banner
        v-if="error"
        class="text-white bg-purrbert"
      >
        <template #avatar>
          <q-avatar square>
            <img src="/assets/images/o7.png">
          </q-avatar>
        </template>

        {{ error }}.<br>
        <small>If you see this, please reach out to developers on Discord or on GitHub.</small>

        <template #action>
          <q-btn
            color="white"
            flat
            label="Go back"
            to="/"
          />
        </template>
      </q-banner>

      <div
        v-if="state.fullyReady"
        :key="1"
        class="bingo-card shadow-5"
        :class="[
          { fullscreen: $q.fullscreen.isActive },
          state.big ? 'big' : 'small'
        ]"
      >
        <template
          v-for="block in state.board"
          :key="block.index"
        >
          <div
            v-if="block.free"
            class="bingo-block free row justify-center items-end"
            :class="{ win: block.win }"
            :style="{ backgroundImage: `url(${state.freeBlockImage ?? '/assets/images/purrbert.png'})` }"
          >
            {{ forcedSeed ? state.seed : '' }}
          </div>

          <BingoBlockItem
            v-else
            :block="block"
            class="shadow-transition"
            :class="[
              `${block.participantId}-block`,
              {
                'shadow-24': isHighligted(block.participantId),
                'dimmed': hoveredParticipant !== null && !isHighligted(block.participantId)
              }
            ]"
            :emotes="settings.emotes"
            :hide-tally="settings.hideTally"
            :participant="state.participants[block.participantId]"
            @decrement="decrement(block)"
            @increment="increment(block)"
          />
        </template>
      </div>

      <div
        v-if="state.fullyReady && state.enoughParticipants"
        :key="2"
        class="bingo-legend row q-pt-lg"
      >
        <div>
          Legend:
          <template
            v-for=" participant in state.participants "
            :key="participant.id"
          >
            <span
              @mouseleave="hoveredParticipant = null"
              @mouseover="hoveredParticipant = participant.id"
            >
              <q-badge
                class="legend q-mr-xs shadow-2"
                :style="{ backgroundColor: participant.color }"
              >
                {{ participant['name'] }}
              </q-badge>
            </span>
          </template>
        </div>

        <q-space />
        <div v-show="$q.platform.is.desktop">
          Hint: Ctrl+Click to undo the tally
        </div>
      </div>
    </transition-group>

    <q-dialog
      v-model="baitModal"
      persistent
      transition-hide="flip-up"
      transition-show="flip-down"
    >
      <q-card class="bg-primary text-white">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            Dear Minawan!
          </div>
          <q-space />
          <q-btn
            v-close-popup
            dense
            flat
            icon="close"
            round
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Do not bait Cerber into saying things on the board with bits and highlighted messages. This is not how Bingo is supposed to be played.<br>
          Please enjoy the content first.
          <div class="text-right">
            - CJMAXiK
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'
console.groupEnd()

// vue-related
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'
const route = useRoute()

// project-related
import BingoBlockItem from 'components/BingoBlockItem.vue'

import { get, getRandomInt } from 'helpers/helpers'
import prompts from 'conf/prompts'

// states
import { useGameStateStore } from 'stores/gameState'
import { useGameSettingsStore } from 'stores/gameSettings'

// props
const props = defineProps({
  character: {
    type: String,
    default: 'cerber'
  },
  type: {
    type: String,
    default: 'cerbathon'
  }
})

const streamType = `${props.character}.${props.type}`
const streamData = get(prompts, streamType)
if (streamData === undefined) location.replace('/404')

const state = useGameStateStore(streamType)
const settings = useGameSettingsStore()

// Quasar object
const $q = useQuasar()

// Init data
const version = 5

// Refs
const error = ref(null)
const baitModal = ref(false)
const hoveredParticipant = ref(null)

const forcedSeed = route.query.f ?? null

onBeforeMount(() => {
  // Load stream data
  streamData().then((/** @type {Object} */ module) => {
    const data = module?.default

    // Generate state
    try {
      if (forcedSeed) {
        console.debug(`Forcing seed ${forcedSeed}`)
      }

      state.generateBoard(data, version, forcedSeed)
      baitModal.value = !!data.bait
    } catch (e) {
      error.value = e
      console.error(e)
    }

    // Rename title
    settings.streamName = data.name
    document.title = `${data.name} | Everyday Cerber Bingo`

    // Apply CSS stuff
    document.getElementById('participantsStyles')?.remove()

    const style = document.createElement('style')
    style.id = 'participantsStyles'

    for (const id in state.participants) {
      const participant = state.participants[id]
      style.innerHTML += `
      .${participant.id}-block {
        --tally-image: url(${participant.image ?? '/assets/images/purrbert.png'});
        --text-color: ${participant.color ?? '#000'};
      }
    `
    }

    document.getElementsByTagName('head')[0].appendChild(style)
  })
})

// page title
onBeforeUnmount(() => {
  document.title = 'Everyday Cerber Bingo'
})

/**
 * Increment the tally
 * @param {Types.BoardBlock} block
 */
const increment = (block) => {
  const hasUpdated = state.increment(block.index, settings.hideTally)
  if (hasUpdated) {
    checkForWin(block)
    notifyForUndo(block)
  }
}

/**
 * Decrement the tally
 * @param {Types.BoardBlock} block
 */
const decrement = (block) => {
  state.decrement(block.index)
  checkForWin(block, true)
}

let lastRandomId = -1

const winSound = ['big-yippie.mp3', 'short_awoo.mp3'].map(x => new Audio('../assets/sounds/' + x))
let lastWinId = -1

/**
 * Check for winning state
 * @param {Types.BoardBlock} block
 * @param {boolean} [decrement=false]
 */
const checkForWin = (block, decrement = false) => {
  const index = block.index
  const participantId = block.participantId
  const sounds = state.participants[participantId].sounds

  const win = state.checkForBingo()
  const isSoundActive = !settings.disableSound && !decrement && (settings.volume !== 0)

  let soundToPlay = null
  if (win?.length !== state.previousWin) {
    lastWinId = getRandomInt(0, winSound.length - 1, lastWinId)
    soundToPlay = winSound[lastWinId]
  } else {
    if (state.getTally(index) === 1) {
      lastRandomId = getRandomInt(0, sounds.length - 1, sounds.length > 1 ? lastRandomId : null)
      soundToPlay = sounds[lastRandomId]
    }
  }

  if (soundToPlay) playSound(soundToPlay, settings.volume, isSoundActive)
  state.previousWin = win.length
}

/**
 * Sound logic
 * @param {HTMLAudioElement} audio
 * @param {number} volume
 * @param {boolean} isActive
 */
const playSound = (audio, volume, isActive) => {
  if (!isActive) return

  audio.pause()
  audio.currentTime = 0
  audio.volume = volume / 100
  audio.play()
}

/**
 * Undo logic for the toast notification)
 * @param {Types.BoardBlock} block
 */
const notifyForUndo = (block) => {
  $q.notify({
    message: 'Made a mistake?',
    progress: true,
    group: false,
    color: 'purrbert',
    timeout: 10000,
    position: 'bottom-right',
    actions: [
      {
        label: 'Undo',
        color: 'white',
        handler: () => {
          decrement(block)
        }
      },
      {
        label: 'Dismiss',
        color: 'white'
      }
    ]
  })
}

// Participant highlight
const isHighligted = (/** @type {string} */ id) => hoveredParticipant.value === id
</script>
