<template>
  <div
    class="bg-white p-4 lg:px-8 flex items-center justify-between rounded w-full shadow-xl -mt-12 mb-16 lg:mb-0"
    style="min-height: 4.5rem"
  >
    <div class="flex flex-wrap gap-2 lg:gap-4">
      <slot>
        <p class="text-desaturated-dark-cyan font-bold tracking-wide">CLICK TAGS TO FILTER</p>
      </slot>
    </div>
    <button
      class="hover:underline focus:outline-none focus:underline text-desaturated-dark-cyan ml-1.5 font-bold"
      @click="$emit('clear-all')"
    >
      Clear
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit } from 'vue';

defineEmit(['clear-all']);
</script>
