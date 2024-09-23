<template>
  <div class="articles-section pt-28 lg:pt-24 pb-32 lg:pb-44">
    <CdrContainer>
      <section>
        <div class="text-center">
          <IconBrandReiIceAxes class="articles-section__icon w-32 h-32 mb-8" />
        </div>
        <div class="articles-section__text mt-6 md:mt-0">
          <CdrHeadingSerif tag="h2" scale="3" class="text-center">
            {{ heading }}
          </CdrHeadingSerif>
          <CdrUtilitySans
            scale="0"
            tag="p"
            class="mb-16 lg:mb-28 sm:mx-80 mt-6 sm:mt-6 text-center"
          >
            {{ subheading }}
          </CdrUtilitySans>
        </div>
        <div class="articles-section__news mb-16 lg:mb-40 sm:px-20">
          <CdrList>
            <li
              v-for="(article, index) in articles"
              :key="`article-${index}`"
              class="mb-16"
            >
              <CdrLink class="block" :href="article.uri" modifier="standalone">
                <CdrHeadingSerif
                  scale="1"
                  tag="h3"
                  class="articles-section__news-title"
                >
                  {{ article.articleTitle }}
                </CdrHeadingSerif>
                <CdrUtilitySans
                  scale="0"
                  tag="p"
                  class="articles-section__news-abstract mt-6"
                >
                  {{ article.articleAbstract }}
                </CdrUtilitySans>
              </CdrLink>
              <hr v-if="index !== articles.length - 1" class="mt-20" />
            </li>
          </CdrList>
        </div>
        <div class="articles-section__cards mt-16">
          <div class="hidden md:grid grid-cols-3 gap-10 lg:gap-32">
            <BaseCardFeatured
              v-for="(item, i) in featuredCards"
              :key="`grid-cards-${i}`"
              :img-src="item.imgSrc"
              :title="item.title"
              :content="item.content"
              :href="item.href"
            />
          </div>
          <div class="md:hidden flex justify-center w-100">
            <BaseCarousel>
              <BaseCardFeatured
                v-for="(item, i) in featuredCards"
                :key="`grid-cards-${i}`"
                :img-src="item.imgSrc"
                :title="item.title"
                :content="item.content"
                :href="item.href"
              />
            </BaseCarousel>
          </div>
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
  CdrList,
  CdrLink,
  IconBrandReiIceAxes,
} from '@rei/cedar';
import BaseCardFeatured from './BaseCardFeatured.vue';
import BaseCarousel from './BaseCarousel.vue';

defineProps<{
  heading: string;
  subheading: string;
  featuredCards: {
    imgSrc: string;
    content: string;
    href: string;
    title: string;
  }[];
  articles: {
    uri: string;
    articleTitle: string;
    articleAbstract: string;
    releaseDate: string;
    entryId: string;
    featured: boolean;
  }[];
}>();
</script>

<style lang="scss" scoped>
.articles-section {
  background: linear-gradient(
    to bottom,
    $cdr-color-background-secondary,
    80%,
    white
  );
  &__icon {
    fill: darksalmon;
  }
  &__news-title {
    text-wrap: pretty;
    color: $secondary-green;
  }
}
</style>
