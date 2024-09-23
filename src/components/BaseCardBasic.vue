<template>
  <CdrCard class="base-card-basic flex flex-col rounded-xl drop-shadow-2xl">
    <CdrLink
      class="base-card-basic__link block h-full"
      :href="href"
      modifier="standalone"
      target="_blank"
    >
      <div
        class="base-card-basic__title grid grid-flow-col justify-center items-center p-4"
      >
        <span class="base-card-basic__title-icon">
          <slot name="icon" />
        </span>
        <CdrHeadingSerif tag="h3" class="text-center" scale="3">
          <slot name="title" />
        </CdrHeadingSerif>
      </div>
      <div class="base-card-basic__description p-8 lg:p-12 h-full">
        <CdrUtilitySans scale="0">
          <slot name="description" />
        </CdrUtilitySans>
      </div>
    </CdrLink>
  </CdrCard>
</template>

<script setup lang="ts">
import { CdrCard, CdrLink, CdrUtilitySans, CdrHeadingSerif } from '@rei/cedar';

defineProps<{
  href: string;
}>();
</script>

<style lang="scss" scoped>
.base-card-basic {
  border-top: 1px solid gray;
  & a:hover {
    text-decoration: none;
  }
  &__title {
    background-color: $cdr-color-text-button-secondary;
    &-icon :deep(svg) {
      height: 50px;
      width: 50px;
      fill: $tertiary-green;
    }
    h3 {
      color: $cdr-color-text-inverse;
    }
  }
  &__description {
    background-color: $cdr-color-background-secondary;
  }
  &__link:focus {
    outline: none;
  }
}
</style>
