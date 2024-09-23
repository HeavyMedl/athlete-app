<template>
  <section class="hero-section flex h-[500px] sm:h-[600px] lg:h-[825px] px-6">
    <CdrImg
      :src="imageSrc"
      :alt="alt || 'No alt text provided'"
      @error="onImageError"
    />
    <div
      class="hero-section__content flex max-w-[1750px] w-full justify-center lg:justify-end m-auto items-end"
    >
      <div
        class="md:w-[500px] z-10 lg:mr-12 hero-section__content-wrap relative"
      >
        <div class="flex">
          <CdrHeadingSerif tag="h1"> Summit Forge </CdrHeadingSerif>
          <IconClimb class="hero-section__icon w-24 h-24 md:h-32 md:w-32" />
        </div>
        <br />
        <CdrUtilitySans tag="p">
          Welcome to Summit Forge—an experimental playground for showcasing
          Vue.js and exploring patterns in web development.
        </CdrUtilitySans>
        <br />
        <div class="mt-24 md:mt-6 flex flex-col sm:flex-row gap-3">
          <CdrButton
            size="large"
            modifier="secondary"
            class="flex gap-1 items-center justify-center"
            tag="a"
            target="_blank"
            :href="primaryCta"
          >
            <IconCodeJs />&nbsp;View the code on GitHub
          </CdrButton>
          <CdrButton
            modifier="secondary"
            size="large"
            class="flex gap-1 items-center justify-center"
            tag="a"
            target="_blank"
            :href="secondaryCta"
          >
            <IconClipboard />&nbsp;Documentation
          </CdrButton>
        </div>
      </div>
    </div>
    <div class="hero-section__overlay" />
  </section>
</template>

<script setup lang="ts">
import {
  CdrUtilitySans,
  CdrHeadingSerif,
  CdrButton,
  IconClipboard,
  IconCodeJs,
  IconClimb,
  CdrImg,
} from '@rei/cedar';
import { ref } from 'vue';

const props = defineProps<{
  src: string;
  alt: string | null;
  primaryCta: string;
  secondaryCta: string;
}>();

const imageSrc = ref(props.src);
const onImageError = () => {
  imageSrc.value = 'https://place-hold.it/1800x1000';
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    @media (min-width: $breakpoint-ultra-wide) {
      object-position: initial;
    }
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, black 0%, 95%, white);
    opacity: 0.5;
    pointer-events: none; /* Allows click events to pass through */
    @include cdr-lg-mq-up {
      opacity: 0.25;
    }
  }
  &__content {
    & p,
    & h1 {
      color: $cdr-color-text-inverse;
      text-shadow: 0.05em 0.05em black;
    }
  }
  &__icon {
    fill: darksalmon;
  }
  &__content-wrap:after {
    display: none;
    content: '';
    position: absolute;
    height: 25em;
    width: 35em;
    background-color: black;
    opacity: 0.3;
    top: -3.5em;
    left: -3em;
    border-radius: 5px;
    pointer-events: none;
    z-index: -1;
    @include cdr-lg-mq-up {
      display: block;
    }
  }
}
</style>
