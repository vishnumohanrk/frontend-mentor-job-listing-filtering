<template>
  <div class="flex p-8 rounded-lg border-l-6 border-desaturated-dark-cyan bg-white shadow-xl">
    <div class="flex w-1/2 group cursor-pointer">
      <img src="https://avatars.githubusercontent.com/u/51525368" class="rounded-full w-24" />
      <div class="flex flex-col ml-4 w-full">
        <div class="flex items-center">
          <p class="text-desaturated-dark-cyan mt-1.5 mr-3.5 font-bold text-sm">PhotoSnap</p>
          <card-chip :chip-text="`NEW!`" />
          <card-chip :chip-text="`FEATURED`" />
        </div>
        <p
          class="text-lg transition-colors text-very-dark-grayish-cyan group-hover:text-desaturated-dark-cyan font-bold tracking-normal mt-2.5"
        >
          Senior FrontEnd Developer
        </p>

        <div class="flex items-center space-x-3 text-very-dark-grayish-cyan opacity-80 font-medium text-sm mt-px">
          <p>1d ago</p>
          <p class="text-lg mb-1">&#183;</p>
          <p>Full Time</p>
          <p class="text-lg mb-1">&#183;</p>
          <p>USA Only</p>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-2 flex-wrap justify-end w-1/2 pr-1.5">
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
