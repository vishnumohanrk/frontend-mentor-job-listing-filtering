<template>
  <img
    src="/images/bg-header-desktop.svg"
    alt="bg-pic"
    class="bg-desaturated-dark-cyan h-32 lg:h-40 w-full object-cover"
    style="z-index: -9"
  />
  <main class="flex flex-col items-center max-w-screen-xl mx-auto min-h-screen p-4">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
</script>
