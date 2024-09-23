<template>
  <div class="featured-athlete-section pt-8 pb-24 md:pb-24 md:pt-28">
    <CdrContainer>
      <section>
        <div class="mt-6 mb-16 md:mt-0">
          <CdrHeadingSerif tag="h2" scale="3">
            The clearest way into the Universe is through a forest wilderness
          </CdrHeadingSerif>
          <CdrUtilitySans scale="0" tag="p" class="mt-6">
            {{ sectionText }}
          </CdrUtilitySans>
        </div>
        <div class="featured-athlete-section__cards mt-16">
          <div class="hidden md:grid grid-cols-3 gap-10 lg:gap-32">
            <CardFeaturedathlete
              v-for="(item, i) in athletes"
              :key="`grid-cards-${i}`"
              :img-src="item.imgSrc"
              :content="item.content"
              :href="item.href || ''"
            />
          </div>
          <div class="md:hidden flex justify-center w-100">
            <BaseCarousel>
              <CardFeaturedathlete
                v-for="(item, i) in athletes"
                :key="`carousel-cards-${i}`"
                :img-src="item.imgSrc"
                :content="item.content"
                :href="item.href || ''"
              />
            </BaseCarousel>
          </div>
        </div>
      </section>
    </CdrContainer>
  </div>
</template>
<script setup lang="ts">
import { CdrUtilitySans, CdrHeadingSerif, CdrContainer } from '@rei/cedar';
import CardFeaturedathlete from './CardFeaturedAthlete.vue';
import BaseCarousel from '../BaseCarousel.vue';

defineProps<{
  sectionText: string;
  athletes: {
    imgSrc: string;
    content: string;
    href: string | null;
  }[];
}>();
</script>
<style lang="scss" scoped>
.featured-athlete-section {
  background: linear-gradient(
    to bottom,
    white 80%,
    $cdr-color-background-secondary
  );
}
</style>
