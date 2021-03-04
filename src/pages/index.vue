<template>
  <div class="mt-12 w-full gap-x-4 gap-y-16 lg:gap-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
    <app-card class="border-desaturated-dark-cyan" />
    <app-card class="border-desaturated-dark-cyan" />
    <app-card class="border-white" />
    <app-card class="border-white" />
  </div>
</template>

<script lang="ts" setup>
import AppCard from '../components/card/Card.vue';
</script>
