<template>
  <p class="text-white font-semibold px-3 pt-2 pb-1 rounded-full" :class="bgColor" style="font-size: 0.6rem">
    {{ chipText }}
  </p>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const { chipText } = defineProps<{ chipText: 'NEW!' | 'FEATURED' }>();

const bgColor = computed(() =>
  chipText === 'FEATURED' ? 'bg-very-dark-grayish-cyan' : 'bg-desaturated-dark-cyan mr-2',
);
</script>
