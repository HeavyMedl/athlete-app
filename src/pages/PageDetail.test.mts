import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PageDetail from './PageDetail.vue';
import modelData from '../mock/details-model-data.mjs';

describe('PageDetail Snapshot Tests', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(PageDetail, {
      props: {
        pageData: modelData.pageData,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
