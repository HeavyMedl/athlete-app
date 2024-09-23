<template>
  <div
    id="athlete-reviews"
    class="athlete-reviews rounded-lg grid grid-cols-1 p-16 gap-12 mb-12"
  >
    <div
      v-for="(review, index) in reviews"
      :key="`review-${index}`"
      class="review"
    >
      <CdrRating
        class="athlete-reviews__rating"
        :rating="review.rating"
        :count="review.rating"
        size="large"
        :compact="false"
      />
      <CdrUtilitySans scale="1" class="athlete-reviews__short mt-2 mb-4">
        {{ review.shortReview }}
      </CdrUtilitySans>
      <CdrUtilitySans scale="0" class="athlete-reviews__long">
        {{ review.longReview }}
      </CdrUtilitySans>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CdrRating, CdrUtilitySans } from '@rei/cedar';
import type { PageData } from '../../types/review-model.mjs';

const props = defineProps<{ pageData: PageData }>();
const {
  pageData: { reviews },
} = props;
</script>

<style>
/*
  Example of loading unscoped cedar styles directly
  in our component. Generally this is not recommended
  because you'll likely have other components that rely
  on cedar styles.
*/
@import '@rei/cedar/dist/style/cdr-rating.css';
</style>

<style scoped lang="scss">
.athlete-reviews {
  background-color: $secondary-green;
  &__rating,
  &__short,
  &__long {
    color: $cdr-color-text-inverse;
  }
}
</style>
