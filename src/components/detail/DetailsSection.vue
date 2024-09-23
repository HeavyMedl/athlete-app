<template>
  <section class="details-section">
    <CdrContainer class="details-section__container">
      <div class="details-section__short-bio">
        <CdrUtilitySans
          id="details-section__short-bio"
          scale="1"
          tag="p"
          class="pb-24"
        >
          {{ shortBio }}
        </CdrUtilitySans>
      </div>
      <div class="details-section__stats-wrapper pb-12">
        <div
          class="details-section__stats rounded-lg grid grid-cols-2 p-16 gap-12"
        >
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Date of birth</strong></CdrEyebrow>
            </div>
            <div class="details-section__stat-value">
              <CdrUtilitySans id="details-section__dob" scale="0" tag="span">
                {{ athleteStats.dob }}
              </CdrUtilitySans>
            </div>
          </div>
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Birthplace</strong></CdrEyebrow>
            </div>
            <div class="details-section__stat-value">
              <CdrUtilitySans
                id="details-section__birthplace"
                scale="0"
                tag="span"
              >
                {{ athleteStats.birthPlace }}
              </CdrUtilitySans>
            </div>
          </div>
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Age</strong></CdrEyebrow>
            </div>
            <div class="details-section__stat-value">
              <CdrUtilitySans id="details-section__age" scale="0" tag="span">
                {{ athleteStats.age }}
              </CdrUtilitySans>
            </div>
          </div>
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Nationality</strong></CdrEyebrow>
            </div>
            <div class="details-section__stat-value">
              <CdrUtilitySans
                id="details-section__nationality"
                scale="0"
                tag="span"
              >
                {{ athleteStats.nationality }}
              </CdrUtilitySans>
            </div>
          </div>
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Career start</strong></CdrEyebrow>
            </div>
            <div class="details-section__stat-value">
              <CdrUtilitySans
                id="details-section__career-start"
                scale="0"
                tag="span"
              >
                {{ athleteStats.careerStart }}
              </CdrUtilitySans>
            </div>
          </div>
          <div class="details-section__stat">
            <div class="details-section__stat-header">
              <CdrEyebrow><strong>Disciplines</strong></CdrEyebrow>
            </div>
            <div
              id="details-section__disciplines"
              class="details-section__stat-value"
            >
              <CdrUtilitySans
                v-for="(discipline, i) in athleteStats.disciplines"
                :key="`${discipline}-${i}`"
                scale="0"
                tag="span"
              >
                {{ discipline
                }}{{ i !== athleteStats.disciplines.length - 1 ? ', ' : '' }}
              </CdrUtilitySans>
            </div>
          </div>
        </div>
      </div>
      <div class="details-section__rating flex pb-12">
        <CdrButton
          size="small"
          modifier="dark"
          class="details-section__rating-like p-6"
          aria-label="thumbs up"
          @click="updateRating(1)"
        >
          <IconThumbsUp />
          <CdrUtilitySans
            class="details-section__rating-like-count ml-4"
            scale="0"
            tag="span"
          >
            {{ rating.toLocaleString() }}
          </CdrUtilitySans>
        </CdrButton>
        <CdrButton
          size="small"
          modifier="dark"
          class="details-section__rating-dislike p-6"
          aria-label="thumbs up"
          @click="updateRating(-1)"
        >
          <IconThumbsDown />
        </CdrButton>
        <CdrButton
          id="details-section__load-reviews"
          modifier="sale"
          class="flex justify-center items-center mx-8"
          :disabled="isReviewsButtonDisabled"
          @click="loadReviews"
        >
          Load reviews
        </CdrButton>
        <div v-if="areReviewsLoading">
          <IconLoading />
        </div>
      </div>
      <athleteReviews
        v-if="isDev && showReviews"
        :page-data="reviewsModelData.pageData"
      />
      <div v-if="reviewsHTML" v-html="reviewsHTML" />
      <div class="details-section__long-bio pb-24">
        <CdrUtilitySans
          v-for="(paragraph, i) in clippedLongBio"
          :key="`${paragraph}-${i}`"
          scale="0"
          tag="p"
        >
          {{ paragraph }}
        </CdrUtilitySans>
        <div v-if="longBio.length > 2">
          <CdrButton size="large" aria-haspopup="dialog" @click="opened = true">
            Read more
          </CdrButton>
          <CdrModal
            v-if="isClient"
            label="Biography"
            :opened="opened"
            aria-describedby="Long biography"
            @closed="opened = false"
          >
            <template #title> Biography </template>
            <div class="details-section__long-bio-modal">
              <CdrUtilitySans
                v-for="(paragraph, i) in longBio"
                :key="`${paragraph}-${i}`"
                scale="0"
                tag="p"
              >
                {{ paragraph }}
              </CdrUtilitySans>
            </div>
          </CdrModal>
        </div>
      </div>
    </CdrContainer>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import {
  CdrUtilitySans,
  CdrContainer,
  CdrEyebrow,
  CdrButton,
  CdrModal,
} from '@rei/cedar';

import athleteReviews from './AthleteReviews.vue';
import reviewsModelData from '../../mock/review-model-data.mjs';

import IconThumbsUp from '../svg/IconThumbsUp.vue';
import IconThumbsDown from '../svg/IconThumbsDown.vue';
import IconLoading from '../svg/IconLoading.vue';

const isDev = ref(import.meta.env.MODE === 'development');

const props = defineProps<{
  shortBio: string;
  longBio: string[];
  id: string | null;
  athleteStats: {
    dob: string;
    age: number;
    careerStart: string;
    birthPlace: string;
    nationality: string;
    disciplines: string[];
  };
}>();

const rating = ref<number>(4367);
const clippedLongBio = computed(() => props.longBio.slice(0, 2));

// Like / dislike functionality
async function updateRating(amount: number) {
  const id = props.id || '3';
  let uri =
    amount === 1
      ? `/athlete/${id}/rating/increment`
      : `/athlete/${id}/rating/decrement`;
  if (isDev.value) {
    // Simulate a request to the server
    uri = 'https://jsonplaceholder.typicode.com/posts';
  }
  try {
    const response = await fetch(uri, { method: 'POST' });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    rating.value += amount;
  } catch (error) {
    // We don't really care about the error.
    rating.value += amount;
  }
}

// Loading reviews functionality
const isReviewsButtonDisabled = ref(false);
const showReviews = ref(false);
const areReviewsLoading = ref(false);
const reviewsHTML = ref<string | null>(null);

const loadReviewsComponent = () => {
  isReviewsButtonDisabled.value = true;
  areReviewsLoading.value = true;
  setTimeout(() => {
    showReviews.value = true;
    areReviewsLoading.value = false;
  }, 2000); // Artificial delay of 2 seconds
};

const fetchReviewHTML = async () => {
  isReviewsButtonDisabled.value = true;
  areReviewsLoading.value = true;
  const id = props.id || '3';
  const uri = `/athlete/${id}/reviews`;
  try {
    const response = await fetch(uri);
    if (response.ok) {
      reviewsHTML.value = await response.text();
    } else {
      console.error('Failed to fetch HTML content');
      reviewsHTML.value = '<p>Failed to load content</p>';
    }
  } catch (error) {
    console.error('Error fetching HTML content:', error);
    reviewsHTML.value = '<p>Error loading content</p>';
  } finally {
    areReviewsLoading.value = false;
  }
};

const loadReviews = () => {
  if (!isDev.value) {
    return fetchReviewHTML();
  }
  return loadReviewsComponent();
};

// Modal functionality
// We choose not to server-render CdrModal. CdrModal
// uses a Teleport component to hoist its DOM elements
// to be a child of <body/>. As a result, SSR doesn't return
// its server-rendered HTML in the response. This causes
// hydration mismatches.
const opened = ref(false);
const isClient = ref<boolean>(false);
onMounted(() => {
  isClient.value = true;
});
</script>

<style lang="scss" scoped>
.details-section {
  background-color: $primary-green;
  &__container {
    max-width: 840px;
  }
  &__short-bio p,
  &__long-bio p,
  &__stat-value span,
  &__stat-header span {
    color: $cdr-color-text-inverse;
  }
  &__stats,
  &__review-loading {
    background-color: $secondary-green;
  }
  &__long-bio p,
  &__long-bio-modal p {
    margin-bottom: 3rem;
  }
  &__rating {
    &-like {
      border-radius: 1em 0 0 1em;
      &:hover,
      &:focus {
        .details-section__rating-like-count {
          color: $cdr-color-text-button-secondary;
        }
      }
      &-count {
        color: $cdr-color-text-inverse;
      }
    }
    &-dislike {
      border-radius: 0 1em 1em 0;
    }
  }
}
</style>
