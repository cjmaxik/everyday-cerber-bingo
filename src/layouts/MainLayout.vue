<template>
  <q-layout view="hHh LpR fFf">
    <PageToolbar />

    <q-page-container>
      <q-banner class="bg-red text-white text-center">
        <span class="text-h4">
          <strong>It's Cerbover!</strong> Subathon has ended. Thank you for playing Bingo! See ya next time.
        </span>
      </q-banner>

      <router-view v-slot="{ Component }">
        <DefaultTransition>
          <component
            :is="Component"
            padding
          />
        </DefaultTransition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
// @ts-check

// project-related
import PageToolbar from 'components/PageToolbar.vue'
</script>
