<template>
  <HeroSection
    :src="heroSrc"
    :alt="heroAlt"
    :primary-cta="primaryCta"
    :secondary-cta="secondaryCta"
  />
  <FeaturedathleteSection
    :section-text="featuredSectionText"
    :athletes="athletes"
  />
  <ThirdPartyStackSection />
  <FirstPartyStackSection
    :alpine-description="alpineDescription"
    :alpine-href="alpineHref"
  />
  <ArticlesSection
    :articles="articles"
    :featured-cards="expertAdviceCards"
    heading="Get inspired"
    :subheading="articlesHeadingSubheading"
  />
  <EngineeringBannerSection :src="bannerSrc" :alt="bannerAlt" />
</template>
<script setup lang="ts">
import { provide } from 'vue';

import HeroSection from '../components/landing/HeroSection.vue';
import FeaturedathleteSection from '../components/landing/FeaturedAthleteSection.vue';
import ThirdPartyStackSection from '../components/landing/ThirdPartyStackSection.vue';
import FirstPartyStackSection from '../components/landing/FirstPartyStackSection.vue';
import EngineeringBannerSection from '../components/landing/EngineeringBannerSection.vue';
import ArticlesSection from '../components/BaseArticlesSection.vue';

import type {
  PageData,
  PurpleChildren,
  PurpleMedia,
  PurpleText,
} from '../types/pages/landing-model.mjs';

const props = defineProps<{ pageData: PageData }>();

// Pick out the data we care about from the model data. We
// do this at the page level component to avoid doing it
// in all child components. This allows the child components
// to stay relatively clean.
const {
  pageData: {
    recentArticles: articles,
    componentModels: {
      lead: {
        model: {
          media: {
            image_xs: { src: heroSrc, alt: heroAlt },
          },
          text: {
            body: { text: featuredSectionText },
          },
        },
      },
      athletes: {
        model: { media: athleteMedia, text: athleteText },
      },
      'ea-cards': {
        model: { children: eaCards },
      },
      'summit-forge-engineering-banner': {
        model: {
          actions: {
            text_1: { target: primaryCta },
            text_2: { target: secondaryCta },
          },
          media: {
            image_xs: { src: bannerSrc, alt: bannerAlt },
          },
          children: {
            'section-1': {
              model: {
                text: {
                  'text-1': { text: alpineDescription },
                },
                actions: {
                  'target-1': { target: alpineHref },
                },
              },
            },
            'section-2': {
              model: {
                text: {
                  'text-1': { text: cedarDescription },
                },
                actions: {
                  'target-1': { target: cedarHref },
                },
              },
            },
          },
        },
      },
    },
  },
} = props;

// Massage data into models for some invididual components
const athletes = Object.keys(athleteMedia).map((key) => {
  const media = athleteMedia[key as keyof PurpleMedia];
  const text = athleteText[key as keyof PurpleText];
  return {
    imgSrc: media.src,
    href: media.target,
    content: text.text,
  };
});

const expertAdviceCards = Object.keys(eaCards).map((key) => {
  const { model } = eaCards[key as keyof PurpleChildren];
  return {
    imgSrc: model.media['image-1'].src,
    content: model.text['text-1'].text,
    href: model.actions['action-1'].target.replace(
      'athlete/article',
      'learn/expert-advice',
    ),
    title: model.headings['heading-2'].text,
  };
});

const articlesHeadingSubheading =
  'Read the latest news about initiatives at the  or learn a new skill, get tips on how to shop, and practice repairing your gear.';
// Provide state to deeply nested components without
// prop drilling. In this case, to CedarCard
provide('cedarDescription', cedarDescription);
provide('cedarHref', cedarHref);
</script>
