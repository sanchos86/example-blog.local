import { shallowMount } from '@vue/test-utils';

import UiSkeletonBox from '~/ui-library/UiSkeletonBox.vue';

describe('UiSkeletonBox.vue', () => {
  const wrapper = shallowMount(UiSkeletonBox);

  it('should have width of 100% if width property not passed', () => {
    expect(wrapper.element.style.width).toBe('100%');
  });

  it('should have width attribute in percentages respective to passed width property', async() => {
    const width = 25;
    await wrapper.setProps({ width });
    expect(wrapper.element.style.width).toBe(`${width}%`);
  });
});
