import UiButton from './UiButton.vue';
import UiLoader from './UiLoader.vue';
import UiHeading from './UiHeading.vue';
import UiSkeletonBox from './UiSkeletonBox.vue';

export default {
  install(Vue) {
    Vue.component(UiButton.name, UiButton);
    Vue.component(UiLoader.name, UiLoader);
    Vue.component(UiHeading.name, UiHeading);
    Vue.component(UiSkeletonBox.name, UiSkeletonBox);
  }
};
