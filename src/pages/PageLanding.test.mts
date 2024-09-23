import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PageLanding from './PageLanding.vue';
import modelData from '../mock/landing-model-data.mjs';

describe('PageLanding Snapshot Tests', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(PageLanding, {
      props: {
        pageData: modelData.pageData,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
