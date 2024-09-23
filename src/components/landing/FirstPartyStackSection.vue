<template>
  <div class="first-party-stack-section pt-28 lg:pt-24 pb-32 lg:pb-80">
    <CdrContainer>
      <section>
        <div class="text-center">
          <IconBrandReiIceAxes
            class="first-party-stack-section__icon w-32 h-32 mb-8"
          />
        </div>
        <div class="first-party-stack-section__text mt-6 md:mt-0">
          <CdrHeadingSerif tag="h2" scale="3" class="text-center">
            Home grown
          </CdrHeadingSerif>
          <CdrUtilitySans
            scale="0"
            tag="p"
            class="mb-16 lg:mb-28 sm:mx-80 mt-6 sm:mt-6 text-center"
          >
            Discover some advanced tools and frameworks created by Summit
            Forge's software engineers, tailored specifically for their peers.
          </CdrUtilitySans>
        </div>
        <div class="mb-20 lg:mb-32">
          <CardCedar />
        </div>
        <div class="grid sm:grid-cols-2 gap-16">
          <BaseCardBasic :href="alpineHref">
            <template #icon>
              <IconElevation />
            </template>
            <template #title> Alpine platform </template>
            <template #description>
              {{ alpineDescription }}
            </template>
          </BaseCardBasic>
          <BaseCardBasic href="https://github.com/rei/create-package">
            <template #icon>
              <IconShipping />
            </template>
            <template #title> Create package </template>
            <template #description>
              Quickly scaffold a Vue component, a vanilla TypeScript library, or
              a microsite using Summit Forge's NPM initializer.
            </template>
          </BaseCardBasic>
        </div>
      </section>
    </CdrContainer>
  </div>
</template>

<script setup lang="ts">
import {
  CdrUtilitySans,
  CdrHeadingSerif,
  CdrContainer,
  IconElevation,
  IconBrandReiIceAxes,
  IconShipping,
} from '@rei/cedar';
import BaseCardBasic from '../BaseCardBasic.vue';
import CardCedar from './CardCedar.vue';

defineProps<{
  alpineDescription: string;
  alpineHref: string;
}>();
</script>

<style lang="scss" scoped>
.first-party-stack-section {
  background-color: $primary-green;
  &__text p,
  &__text h2 {
    color: $cdr-color-text-inverse;
  }
  &__icon {
    fill: darksalmon;
  }
}
</style>
