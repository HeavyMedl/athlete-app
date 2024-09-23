<template>
  <CdrCard
    class="base-card-large rounded-xl drop-shadow-2xl grid sm:grid-flow-col"
  >
    <div class="base-card-large__top-container px-6 pt-12 sm:pt-0 sm:pl-0">
      <div class="base-card-large__img-container sm:h-full">
        <CdrImg
          alt="Sasquatch standing behind a tree in a forest"
          class="block h-[300px] sm:h-full"
          :src="imageSrc"
          @error="onImageError"
        />
      </div>
    </div>
    <div class="base-card-large__content">
      <div
        class="base-card-large__content-text p-6 h-full flex flex-col items-start justify-evenly"
      >
        <div class="grid grid-flow-col justify-center items-center sm:mt-24">
          <IconWilderness class="w-[50px] h-[50px]" />
          <CdrHeadingSerif tag="h3" scale="3">
            Cedar design system
          </CdrHeadingSerif>
        </div>
        <div class="mt-4 sm:px-12">
          <CdrUtilitySans scale="0">
            {{ cedarDescription }}
          </CdrUtilitySans>
        </div>
        <div class="mt-16 w-full sm:pl-12 sm:w-auto">
          <CdrButton
            :href="cedarHref"
            size="large"
            class="flex justify-center w-full"
            tag="a"
            target="_blank"
          >
            Learn more about Cedar
          </CdrButton>
        </div>
      </div>
    </div>
  </CdrCard>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';

import {
  CdrCard,
  CdrHeadingSerif,
  CdrImg,
  IconWilderness,
  CdrUtilitySans,
  CdrButton,
} from '@rei/cedar';

// Provided by PageLanding
const cedarDescription = inject<string>('cedarDescription');
const cedarHref = inject<string>('cedarHref');

const imageSrc = ref('https://cedar.rei.com/img/cdr-guidelines-landing.svg');
const onImageError = () => {
  imageSrc.value = 'https://place-hold.it/200x200';
};
</script>

<style lang="scss" scoped>
.base-card-large {
  &:hover {
    transform: none;
    cursor: inherit;
  }
  // border-top: 1px solid gray;
  & a:hover {
    text-decoration: none;
  }
  &__top-container {
    background-color: $cdr-color-text-button-secondary;
  }
  &__img-container {
    & img {
      object-fit: cover;
      object-position: right;
    }
  }
  &__content {
    background-color: $cdr-color-background-secondary;
    @media (min-width: $cdr-breakpoint-sm) {
      background: linear-gradient(
        $cdr-color-text-button-secondary 0% 45px,
        #f4f2ed 45px 100%
      );
    }
    &-text {
      & p,
      & h3 {
        color: $secondary-green;
      }
      & svg {
        fill: darksalmon;
      }
    }
  }
}
</style>
