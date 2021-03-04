<template>
  <div class="my-16 w-full gap-x-4 gap-y-16 lg:gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
    <app-card v-for="i in data" :key="i.id" v-bind="i" />
  </div>
</template>

<script lang="ts" setup>
import AppCard from '../components/card/Card.vue';
import data from '../utils/data.json';
</script>
