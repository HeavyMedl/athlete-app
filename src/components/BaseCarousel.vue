<template>
  <div class="relative">
    <CdrButton
      :icon-only="true"
      aria-label="Left"
      class="base-carousel__button base-carousel__button--left absolute z-10 hidden"
      @click="buttonClickHandler('previous')"
    >
      <IconCaretLeft />
    </CdrButton>
    <div class="base-carousel" :style="styleObject">
      <div ref="slideContainer" class="base-carousel__slides">
        <slot />
      </div>
    </div>
    <CdrButton
      :icon-only="true"
      aria-label="Right"
      class="base-carousel__button base-carousel__button--right absolute z-10 hidden"
      @click="buttonClickHandler('next')"
    >
      <IconCaretRight />
    </CdrButton>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { CdrButton, IconCaretLeft, IconCaretRight } from '@rei/cedar';

const props = withDefaults(
  defineProps<{
    width?: string;
  }>(),
  {
    width: '360px',
  },
);

const styleObject = computed(() => ({
  width: props.width,
}));

const slideContainer = ref<HTMLElement>();
const activeSlide = ref<HTMLElement>();
let observer: IntersectionObserver;

/**
 * We create an IntersectionObserver instance with a callback function
 * that is invoked whenever an observed item intersects with
 * the root element (in this case, the slide container).
 *
 * Whenever an item intersects with the slide container,
 * it is considered the active slide, and the activeSlide
 * variable is updated.
 */
function observeItems() {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSlide.value = entry.target as HTMLElement;
        }
      });
    },
    {
      root: slideContainer.value,
      threshold: 0.5,
    },
  );
  const slideElements = [...(slideContainer.value as HTMLElement).children];
  slideElements.forEach((item: Element) => observer.observe(item));
}

/**
 * Helper function to scroll to the {@link slide}.
 *
 * @param slide
 */
function scrollToSlide(slide?: Element) {
  (slide as Element).scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'start',
  });
}

/**
 * When in the "sm" breakpoint, arrow buttons appear to the left
 * and right of the carousel. This click handler determines which
 * slide to scroll to. Next or previous.
 *
 * @param action
 */
function buttonClickHandler(action: string) {
  const slides = slideContainer.value?.children as HTMLCollection;
  if (!slides || !activeSlide.value) return;

  const getPreviousSlide = (): Element =>
    activeSlide.value?.previousElementSibling || slides[slides.length - 1];

  const getNextSlide = (): Element =>
    activeSlide.value?.nextElementSibling || slides[0];

  let newActiveSlide: Element;
  switch (action) {
    case 'previous':
      newActiveSlide = getPreviousSlide();
      break;
    case 'next':
      newActiveSlide = getNextSlide();
      break;
    default:
      return;
  }
  scrollToSlide(newActiveSlide);
}

onMounted(() => {
  observeItems();
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<style lang="scss" scoped>
.base-carousel {
  overflow: hidden;
  &__button {
    margin-top: -2.5em;
    & svg {
      width: 5em;
      height: 5em;
      fill: darksalmon;
    }
    &--left {
      transform: translateX(-10rem);
      top: 50%;
    }
    &--right {
      transform: translateX(10rem);
      top: 50%;
      right: 0;
    }
    @media (min-width: 540px) {
      display: block;
    }
  }
  &__slides {
    padding: 12px;
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    @include cdr-sm-mq-up {
      //  Hide scrollbar
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }

    &::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    & > * {
      scroll-snap-align: center;
      flex-shrink: 0;
      &:not(:last-child) {
        margin-right: 50px;
      }
    }
  }
}
</style>
