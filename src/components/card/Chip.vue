<template>
  <p
    class="text-white font-semibold px-3 pt-2 pb-1 rounded-full"
    :class="chipText === 'FEATURED' ? 'bg-very-dark-grayish-cyan' : 'bg-desaturated-dark-cyan mr-2'"
    style="font-size: 0.6rem"
  >
    {{ chipText }}
  </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{ chipText: 'NEW!' | 'FEATURED' }>();
</script>
