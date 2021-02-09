<template>
  <button
    class="button"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'UiButton'
  };
</script>

<style lang="scss" scoped>
  .button {
    padding: map_get($gaps, 2) map_get($gaps, 3);
    border: 0;
    border-radius: $border-radius;
    background-color: $color-secondary;
    color: $color-white;
    font-size: $font-md;
    line-height: normal;
    transition: background-color 0.05s ease;
    cursor: pointer;

    &:hover {
      background-color: $color-accent;
    }
  }
</style>
