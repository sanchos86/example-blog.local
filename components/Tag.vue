<template>
  <nuxt-link
    class="tag"
    :class="classes"
    :to="{ name: 'tags-slug', params: { slug: tag.slug } }"
  >
    {{ `#${tag.name}` }}
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      tag: {
        type: Object,
        required: true
      },
      size: {
        type: String,
        default: 'normal',
        validator(value) {
          const sizes = ['small', 'normal'];
          return sizes.includes(value);
        }
      },
      rounded: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `tag--size-${this.size}`,
          { 'tag--rounded': this.rounded }
        ];
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tag {
    margin: 0 1px 1px 0;
    background-color: $color-secondary;
    color: $color-white;
    font-size: $font-md;
    transition: 0.05s background-color ease;
    text-transform: lowercase;

    &--size-small {
      padding: 0 map_get($gaps, 1);
    }

    &--size-normal {
      padding: map_get($gaps, 2) map_get($gaps, 3);
    }

    &--rounded {
      border-radius: $border-radius;
    }

    &:hover {
      background-color: $color-accent;
    }
  }
</style>
