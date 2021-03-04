<template>
  <div class="flex flex-col lg:flex-row p-4 pb-6 lg:px-8 lg:py-6 rounded-lg border-l-6 bg-white shadow-xl relative">
    <div class="flex flex-col lg:flex-row lg:w-1/2 group cursor-pointer">
      <img
        src="https://avatars.githubusercontent.com/u/51525368"
        class="absolute -top-10 lg:static rounded-full w-20 lg:w-24 object-cover"
      />
      <div class="flex flex-col mt-8 lg:mt-0 lg:ml-4 w-full">
        <div class="flex items-center">
          <p class="text-desaturated-dark-cyan mt-0.5 mr-3.5 font-bold lg:text-sm">PhotoSnap</p>
          <card-chip :chip-text="`NEW!`" />
          <card-chip :chip-text="`FEATURED`" />
        </div>
        <p
          class="transition-colors text-very-dark-grayish-cyan group-hover:text-desaturated-dark-cyan font-bold tracking-normal mt-2.5"
        >
          Senior FrontEnd Developer
        </p>

        <div class="flex items-center gap-x-3 text-very-dark-grayish-cyan opacity-80 font-medium text-sm mt-px">
          <p>1d ago</p>
          <p class="text-2xl mb-1">&#183;</p>
          <p>Full Time</p>
          <p class="text-2xl mb-1">&#183;</p>
          <p>USA Only</p>
        </div>
      </div>
    </div>

    <div aria-hidden class="lg:hidden h-px w-full bg-gray-900 opacity-20 mt-2.5 mb-4"></div>

    <div class="flex items-center gap-3 lg:gap-2 flex-wrap lg:justify-end lg:w-1/2 pr-1.5">
      <card-tag-button tag-label="REACT" />
      <card-tag-button tag-label="CSS" />
      <card-tag-button tag-label="JavaScript" />
      <card-tag-button tag-label="FrontEnd" />
      <card-tag-button tag-label="VUE" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CardChip from './Chip.vue';
import CardTagButton from './TagButton.vue';
</script>
