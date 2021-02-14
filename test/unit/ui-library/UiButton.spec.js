import { shallowMount } from '@vue/test-utils';

import UiButton from '~/ui-library/UiButton.vue';

describe('UiButton.vue', () => {
  const slot = '<span>Submit</span>';
  const wrapper = shallowMount(UiButton, {
    slots: {
      default: [slot]
    }
  });

  it('should emit click event', async() => {
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click').length).toBe(1);
  });

  it('should correctly render default slot', () => {
    expect(wrapper.html()).toContain(slot);
  });
});
