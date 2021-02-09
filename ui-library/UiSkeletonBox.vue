<template>
  <span class="skeleton-box" :style="{ width: `${width}%` }" />
</template>

<script>
  export default {
    name: 'UiSkeletonBox',
    props: {
      width: {
        type: Number,
        default: 100
      }
    }
  };
</script>

<style lang="scss" scoped>
  .skeleton-box {
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: 1em;
    background-color: $color-grey-light;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
          90deg,
          rgba(#fff, 0) 0,
          rgba(#fff, 0.2) 20%,
          rgba(#fff, 0.5) 60%,
          rgba(#fff, 0)
      );
      animation: shimmer 2s infinite;
      content: '';
    }
  }
</style>
