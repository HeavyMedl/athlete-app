import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseCarousel from './BaseCarousel.vue';

// Mock components
vi.mock('@rei/cedar', () => ({
  CdrButton: {
    template: '<button><slot /></button>',
  },
  IconCaretLeft: {
    template: '<svg />',
  },
  IconCaretRight: {
    template: '<svg />',
  },
}));

describe('BaseCarousel', () => {
  let wrapper: any;
  const slots = {
    default:
      '<div class="slide">Slide Content</div><div class="slide">Slide Content 2</div>',
  };

  beforeEach(() => {
    wrapper = mount(BaseCarousel, {
      props: {
        width: '400px',
      },
      slots,
    });

    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    wrapper.unmount();
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('sets the correct width style', () => {
    expect(wrapper.find('.base-carousel').element.style.width).toBe('400px');
  });

  it('initializes IntersectionObserver on mount', () => {
    expect(wrapper.vm.observer).toBeInstanceOf(IntersectionObserver);
  });

  it('updates activeSlide when intersection occurs', async () => {
    const slide = wrapper.find('.slide').element;
    wrapper.vm.observer.callback([{ isIntersecting: true, target: slide }]);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.activeSlide).toBe(slide);
  });

  it('scrolls to the next slide when the next button is clicked', async () => {
    const slideContainer = wrapper.find('.base-carousel__slides').element;

    // Simulate that the first slide is active
    wrapper.vm.activeSlide = slideContainer.children[0];
    await wrapper.find('.base-carousel__button--right').trigger('click');

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });

  it('scrolls to the previous slide when the previous button is clicked', async () => {
    const slideContainer = wrapper.find('.base-carousel__slides').element;

    // Simulate that the second slide is active
    wrapper.vm.activeSlide = slideContainer.children[1];
    await wrapper.find('.base-carousel__button--left').trigger('click');

    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  });

  it('disconnects IntersectionObserver on unmount', () => {
    const disconnectSpy = vi.spyOn(wrapper.vm.observer, 'disconnect');
    wrapper.unmount();
    expect(disconnectSpy).toHaveBeenCalled();
  });
});
