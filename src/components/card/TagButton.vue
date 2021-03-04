<template>
  <button
    type="button"
    class="text-sm px-2.5 pt-2.5 pb-1.5 rounded font-semibold transition-colors ease-linear text-desaturated-dark-cyan bg-light-grayish-cyan hover:bg-desaturated-dark-cyan active:bg-desaturated-dark-cyan hover:text-white active:text-white focus:outline-none focus:ring-2 focus:ring-desaturated-dark-cyan focus:ring-offset-2 focus:ring-transparent"
  >
    {{ tagLabel }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{ tagLabel: string }>();
</script>
