<template>
  <section class="hero-section flex h-[800px] lg:h-[80vh] px-6">
    <CdrImg
      id="hero-section__hero-img"
      class="hero-section__hero-img object-right"
      :src="heroImgSrc"
      :alt="alt || 'No alt text provided'"
      @error="onHeroImgError"
    />
    <CdrContainer>
      <div
        class="hero-section__content flex flex-col items-center h-full justify-end relative z-10 md:flex-row md:justify-between md:items-end md:pb-16"
      >
        <div class="hero-section__avatar py-10 md:py-0">
          <CdrImg
            class="border-4 border-solid border-white h-[120px] w-[120px] sm:h-[150px] sm:w-[150px] sm:mb-12 md:mb-0 object-cover object-top"
            radius="round"
            alt="athlete image"
            :src="avatarImgSrc"
            @error="onAvatarImgError"
          />
        </div>
        <div
          class="hero-section__name md:w-[55%] lg:w-[60%] md:pl-4 text-center md:text-left"
        >
          <CdrHeadingSerif tag="h1" scale="4" class="">
            {{ name }}
          </CdrHeadingSerif>
          <div class="hero-section__meta text-center md:text-left">
            <CdrUtilitySans scale="1" tag="p" class="mb-12">
              {{ country }} · {{ discipline }}
            </CdrUtilitySans>
          </div>
        </div>

        <div class="hero-section__socials mb-12 flex">
          <CdrButton
            size="large"
            modifier="secondary"
            class="p-6 rounded-full mr-4"
            tag="a"
            target="_blank"
            :href="externalSiteUrl || '#'"
            aria-label="External link"
          >
            <IconExternalLink />
          </CdrButton>
          <CdrButton
            size="large"
            modifier="secondary"
            class="p-6 rounded-full mr-4"
            tag="a"
            href="javascript:void(0)"
            aria-label="Twitter"
          >
            <IconTwitter />
          </CdrButton>
          <CdrButton
            size="large"
            modifier="secondary"
            class="p-6 rounded-full mr-4"
            tag="a"
            href="javascript:void(0)"
            aria-label="Instagram"
          >
            <IconInstagram />
          </CdrButton>
          <CdrButton
            size="large"
            modifier="secondary"
            class="p-6 rounded-full"
            tag="a"
            href="javascript:void(0)"
            aria-label="Facebook"
          >
            <IconFacebook />
          </CdrButton>
        </div>
      </div>
    </CdrContainer>
    <div class="hero-section__overlay" />
  </section>
</template>

<script setup lang="ts">
import {
  CdrUtilitySans,
  CdrHeadingSerif,
  CdrImg,
  CdrContainer,
  CdrButton,
  IconExternalLink,
  IconInstagram,
  IconTwitter,
  IconFacebook,
} from '@rei/cedar';
import { ref } from 'vue';

const props = defineProps<{
  src: string;
  alt: string | null;
  avatarImg: string;
  externalSiteUrl: string | null;
  name: string;
  country: string;
  discipline: string;
}>();
const heroImgSrc = ref(props.src);
const onHeroImgError = () => {
  heroImgSrc.value = 'https://place-hold.it/1800x1000';
};

const avatarImgSrc = ref(props.avatarImg);
const onAvatarImgError = () => {
  avatarImgSrc.value = 'https://place-hold.it/200x200';
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  &__hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 0%, $primary-green 100%);
    pointer-events: none; /* Allows click events to pass through */
  }
  &__name,
  &__meta {
    & p,
    & h1 {
      color: $cdr-color-text-inverse;
    }
    text-shadow: black 10px 5px 20px;
  }
  &__icon {
    fill: darksalmon;
  }
}
</style>
