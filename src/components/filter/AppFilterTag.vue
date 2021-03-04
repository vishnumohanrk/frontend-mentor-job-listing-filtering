<template>
  <div class="flex justify-center items-center">
    <p class="px-2.5 pt-2.5 pb-1.5 rounded-l font-semibold text-desaturated-dark-cyan bg-light-grayish-cyan">
      {{ filterLabel }}
    </p>
    <button
      type="button"
      class="p-2.5 rounded-r transition-colors bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan text-white focus:outline-none focus:ring-2"
      @click="$emit('remove', filterLabel)"
    >
      <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps } from 'vue';

defineProps<{ filterLabel: string }>();

defineEmit(['remove']);
</script>
