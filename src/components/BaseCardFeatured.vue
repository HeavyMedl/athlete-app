<template>
  <CdrCard class="card-featured-alt flex flex-col rounded-xl">
    <CdrLink
      class="card-featured-alt__link block"
      :href="href"
      modifier="standalone"
    >
      <div
        class="card-featured-alt__img-container flex justify-center items-center h-[250px]"
      >
        <CdrImg
          alt="Featured image"
          class="object-cover h-full w-full"
          :src="imageSrc"
          @error="onImageError"
        />
      </div>
      <div class="card-featured-alt__content p-10 pb-12">
        <CdrHeadingSerif tag="div" scale="1">
          <p class="mt-0 mb-6" v-html="title" />
        </CdrHeadingSerif>
        <CdrUtilitySans tag="div" scale="0">
          <p class="m-0" v-html="content" />
        </CdrUtilitySans>
      </div>
    </CdrLink>
    <div class="mt-auto flex justify-center mb-5 ml-5">
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
  CdrHeadingSerif,
} from '@rei/cedar';

const props = defineProps<{
  href: string;
  imgSrc: string;
  content: string;
  title: string;
}>();

const imageSrc = ref(props.imgSrc);
const onImageError = () => {
  imageSrc.value = 'https://place-hold.it/334x250';
};
</script>

<style lang="scss" scoped>
.card-featured-alt {
  border: 1px solid grey;
  &__link:focus {
    outline: none;
  }
}
</style>
