<template>
  <CdrBanner v-if="showWarningBanner" type="warning" role="alert">
    <template #icon-left>
      <IconErrorFill />
    </template>
    Model data couldn't be fetched for the Detail page. Defaulting to Tenzing
    Norgay
    <template #icon-right>
      <CdrButton
        :icon-only="true"
        aria-label="Close"
        @click="showWarningBanner = false"
      >
        <template #icon>
          <IconXLg inherit-color />
        </template>
      </CdrButton>
    </template>
  </CdrBanner>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { CdrBanner, IconErrorFill, CdrButton, IconXLg } from '@rei/cedar';

const { data } = defineProps<{
  data?: string | null;
}>();

// If no data, show banner.
const showWarningBanner = ref<boolean>(!data);
</script>
