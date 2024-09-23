<template>
  <component :is="componentName" :page-data="pageData" />
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { getComponentContext } from './util/index.mjs';

const pageData = ref();
const componentName = ref();

onBeforeMount(async () => {
  const componentContext = await getComponentContext();
  componentName.value = componentContext.componentName;
  pageData.value = componentContext.pageData;
});
</script>
