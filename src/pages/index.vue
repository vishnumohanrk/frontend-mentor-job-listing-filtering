<template>
  <filter-container :class="{ 'lg:opacity-0': !selectedTags.length }" @clear-all="clearAll">
    <filter-tag v-for="i in selectedTags" :key="i" :filter-label="i" @remove="removeOne" />
  </filter-container>

  <div class="lg:mt-8 mb-16 w-full gap-x-4 gap-y-16 lg:gap-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
    <app-card v-for="i in finalList" :key="i.id" v-bind="i" @tag-select="handleTagSelect" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppCard from '../components/card/Card.vue';
import FilterContainer from '../components/filter/FilterContainer.vue';
import FilterTag from '../components/filter/FilterTag.vue';
import data from '../utils/data.json';

const router = useRouter();
const { query } = useRoute();

const initialFilter = computed(() => {
  const s = query.filter as string | null;
  if (!s) return [];
  return s.split(',');
});

const selectedTags = ref<string[]>(initialFilter.value);

const handleTagSelect = (i: string) => {
  if (!selectedTags.value.includes(i)) selectedTags.value = [...selectedTags.value, i];
};

const clearAll = () => {
  selectedTags.value = [];
};

const removeOne = (i: string) => {
  selectedTags.value = selectedTags.value.filter(v => v !== i);
};

const finalList = computed(() =>
  selectedTags.value.length
    ? data.filter(i => {
        const finalToolsList = [i.role, i.level, ...i.languages, ...i.tools];
        return selectedTags.value.every(j => finalToolsList.includes(j));
      })
    : data,
);

watch(selectedTags, newValue => router.replace({ query: { filter: newValue.join(',') } }));
</script>
