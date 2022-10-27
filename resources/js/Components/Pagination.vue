<script setup>

import { InertiaLink } from '@inertiajs/inertia-vue3'

const props = defineProps({
  links: Object
})

</script>

<template>
  <div>
    <div class="mt-6 -mb-1 flex flex-wrap">
      <div v-for="link in links" :key="link">
        <inertia-link
          v-if="link.url === null"
          class="mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 disabled"
          v-html="link.label"
        ></inertia-link>
        <inertia-link
          v-else
          class="
            mr-1
            mb-1
            px-4
            py-3
            text-sm
            border
            rounded
            hover:bg-gray-300
            focus:border-indigo-500 focus:text-indigo-500
          "
          :class="{
            'bg-gray-300': link.active,
            'ml-autos': link.label === 'Next',
          }"
          :href="link.url"
          ><span v-html="link.label"></span
        ></inertia-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.disabled {
    pointer-events: none;
}
</style>
