<template>
  <div class="athlete-engineering-banner h-[300px] sm:h-[500px] lg:h-[800px]">
    <CdrImg :src="imageSrc" :alt="alt || ''" @error="onImageError" />
    <div class="athlete-engineering-banner__overlay" />
  </div>
</template>
<script setup lang="ts">
import { CdrImg } from '@rei/cedar';
import { ref } from 'vue';

const props = defineProps<{
  src: string;
  alt: string | null;
}>();

const imageSrc = ref(props.src);
const onImageError = () => {
  imageSrc.value = 'https://place-hold.it/1920x843';
};
</script>
<style lang="scss">
.athlete-engineering-banner {
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, white, 10%, transparent);
    pointer-events: none; /* Allows click events to pass through */
  }
}
</style>
