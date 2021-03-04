<template>
  <div
    class="flex flex-col lg:flex-row pb-6 pl-4 pr-5.5 lg:px-8 py-4 lg:py-6 rounded-lg border-l-6 bg-white shadow-xl relative"
    :class="isFeatured ? 'border-desaturated-dark-cyan' : 'border-white'"
  >
    <div class="flex flex-col lg:flex-row lg:w-1/2">
      <img
        :src="logo"
        :alt="`${company}-logo`"
        class="absolute -top-10 lg:static rounded-full w-20 lg:w-24 lg:h-24 object-cover"
      />

      <div class="flex flex-col mt-8 lg:mt-0 lg:ml-4 w-full">
        <div class="flex items-center">
          <p class="text-desaturated-dark-cyan mt-0.5 mr-3.5 font-bold lg:text-sm">
            {{ company }}
          </p>
          <card-chip v-if="isNew" :chip-text="`NEW!`" />
          <card-chip v-if="isFeatured" :chip-text="`FEATURED`" />
        </div>

        <p
          class="transition-colors text-very-dark-grayish-cyan hover:text-desaturated-dark-cyan font-bold tracking-normal mt-2.5 cursor-pointer"
        >
          {{ position }}
        </p>

        <div class="flex items-center gap-x-3 text-very-dark-grayish-cyan opacity-80 font-medium text-sm mt-px">
          <p>{{ postedAt }}</p>
          <p class="text-2xl mb-1">&#183;</p>
          <p>{{ contract }}</p>
          <p class="text-2xl mb-1">&#183;</p>
          <p>{{ location }}</p>
        </div>
      </div>
    </div>

    <div aria-hidden class="lg:hidden h-px w-full bg-gray-900 opacity-20 mt-2.5 mb-4"></div>

    <div class="flex items-center gap-3 lg:gap-2 flex-wrap lg:justify-end lg:w-1/2 lg:mr-2">
      <card-tag-button v-for="i in [role, level, ...languages, ...tools]" :key="i" :tag-label="i" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

import CardChip from './Chip.vue';
import CardTagButton from './TagButton.vue';

defineProps<{
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}>();
</script>
