<template>
  <CdrCard class="card-featured-athlete flex flex-col rounded-xl">
    <CdrLink
      class="card-featured-athlete__link block"
      :href="href"
      modifier="standalone"
      :data-analytics-id="analyticsId"
    >
      <div
        class="card-featured-athlete__img-container flex justify-center items-center py-10"
      >
        <CdrImg
          class="border-4 border-solid border-white w-[200px] h-[200px]"
          radius="round"
          alt="athlete image "
          :src="imageSrc"
          @error="onImageError"
        />
      </div>
      <div class="card-featured-athlete__content p-10 pb-5">
        <CdrUtilitySans tag="div" scale="1">
          <p class="m-0" v-html="content" />
        </CdrUtilitySans>
      </div>
    </CdrLink>
    <div class="mt-auto flex justify-end mb-5 mr-5">
      <CdrButton modifier="dark" tag="a" :href="href"> Learn more </CdrButton>
    </div>
  </CdrCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  CdrCard,
  CdrLink,
  CdrButton,
  CdrImg,
  CdrUtilitySans,
} from '@rei/cedar';

const props = defineProps<{
  href: string;
  imgSrc: string;
  content: string;
}>();

/**
 * Used in java automated tests
 */
const analyticsId = ref(
  (() => {
    const index = props.href.lastIndexOf('/');
    return props.href.substring(index + 1);
  })(),
);

const imageSrc = ref(props.imgSrc);
const onImageError = () => {
  imageSrc.value = 'https://place-hold.it/200x200';
};
</script>

<style lang="scss" scoped>
.card-featured-athlete {
  border: 1px solid grey;
  &__img-container {
    background-color: $cdr-color-text-button-secondary;
  }
  &__link:focus {
    outline: none;
  }
}
</style>
