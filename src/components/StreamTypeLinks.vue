<template>
  <div
    class="text-h5 q-my-sm text-center"
    :class="`text-${id}`"
  >
    SELECT A STREAM:
  </div>

  <q-list
    class="q-mt-sm text-center no-scroll"
    separator
  >
    <template v-for="{ name, entries } in streams">
      <q-expansion-item
        v-if="name !== null"
        :key="name"
        expand-icon-class="collab-toggle"
        group="collab"
        header-class="text-purrbert text-h6"
        :label="name"
        toggle
      >
        <div class="collabs row">
          <StreamTypeItem
            v-for="stream in entries"
            v-bind="stream"
            :key="stream.to"
            class="col-6 col-grow"
            :to="toLink(id, stream.to)"
          />
        </div>
      </q-expansion-item>

      <StreamTypeItem
        v-for="stream in entries"
        v-else
        v-bind="stream"
        :key="stream.to"
        :to="toLink(id, stream.to)"
      />
    </template>
  </q-list>
</template>

<script setup>
// @ts-check

// project-related
import StreamTypeItem from 'components/StreamTypeItem.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  characterName: {
    type: String,
    required: true
  },
  streams: {
    type: Object,
    required: true
  }
})

/**
 * @param {string} id
 * @param {string} to
 */
const toLink = (id, to) => {
  return `${id}/${to}`
}

defineEmits(['returnToSelection'])
</script>
