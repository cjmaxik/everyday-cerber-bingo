<template>
  <q-card>
    <q-toolbar v-show="!isIndex">
      <q-avatar>
        <img src="/icons/android-chrome-192x192.png">
      </q-avatar>

      <q-toolbar-title class="text-center">
        Everyday <span class="text-weight-bold">Cerber</span> Bingo
      </q-toolbar-title>

      <q-btn
        v-close-popup
        dense
        flat
        icon="close"
        round
      />
    </q-toolbar>

    <HowToPlayPanel v-if="!isIndex" />

    <q-card-section>
      <p class="no-margin">
        Brought to you by:
      </p>
      <ul class="text-left q-mt-none">
        <li>
          <a
            ref="noopener noreferrer"
            href="https://cjmaxik.com?ref=cerber-bingo"
            target="_blank"
          >CJMAXiK</a> - Developer
        </li>

        <li>
          <a
            ref="noopener noreferrer"
            href="https://www.twitch.tv/unmovablejaveline?ref=cerber-bingo"
            target="_blank"
          >VibrationJaveline</a> - Prompt Editor
        </li>

        <li>
          <a
            ref="noopener noreferrer"
            href="https://github.com/cjmaxik/everyday-cerber-bingo/graphs/contributors?ref=cerber-bingo"
            target="_blank"
          >Contributors</a> - Various help
        </li>
      </ul>

      <p v-if="!isIndex">
        Source code is available on <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-cerber-bingo?ref=cerber-bingo"
          target="_blank"
        >GitHub</a>. Based on <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-neuro-bingo?ref=cerber-bingo"
          target="_blank"
        >Everyday Neuro Bingo</a>.
      </p>

      <p v-else>
        Full credits are available <a
          ref="noopener noreferrer"
          href="https://github.com/cjmaxik/everyday-cerber-bingo#credits?ref=cerber-bingo"
          target="_blank"
        >here</a> and in the About section.
      </p>

      <hr>

      <p class="text-center">
        <span class="text-weight-bold">Cerber</span> (CerberVT) is an independent female English VTuber.<br>
        She is a cheerful beacon of intense positivity and wholesomeness. As a hellhound, she nicknames everyone with "Wan" in their name and uses it like a verbal tick, such as switching "1" for Wan at every opportunity. She is also welcoming and easily flustered by simple compliments.
      </p>

      <p>
        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.twitch.tv/cerbervt?ref=cerber-bingo"
            label="Twitch"
            no-caps
            style="background-color: #6441a5;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.youtube.com/@cerberVT?ref=cerber-bingo"
            label="YouTube"
            no-caps
            style="background-color: #c4302b;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>

        <q-btn-group spread>
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://twitter.com/cerberVT?ref=cerber-bingo"
            label="Twitter"
            no-caps
            style="background-color: #00acee;"
            target="_blank"
            text-color="white"
          />
          <q-btn
            ref="noopener noreferrer"
            dense
            href="https://www.tiktok.com/@cerbervt?ref=cerber-bingo"
            label="TikTok"
            no-caps
            style="background-color: #FE2C55;"
            target="_blank"
            text-color="white"
          />
        </q-btn-group>
      </p>
    </q-card-section>
  </q-card>
</template>

<script setup>
// @ts-check

import HowToPlayPanel from './HowToPlayPanel.vue'

defineProps({
  isIndex: {
    type: Boolean,
    default: false
  }
})
</script>
