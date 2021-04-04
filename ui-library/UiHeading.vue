<script>
  export default {
    name: 'UiHeading',
    functional: true,
    props: {
      level: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      bordered: {
        type: Boolean,
        default: true
      }
    },
    render(createElement, context) {
      const classNames = [
        context.props.bordered ? 'heading--bordered' : ''
      ];
      return createElement(
        `h${context.props.level}`,
        { class: ['heading', context.data.staticClass, ...classNames] },
        [createElement('span', { class: ['heading__title'] }, context.props.title)]
      );
    }
  };
</script>

<style lang="scss" scoped>
  .heading {
    $heading: &;
    font-size: 18px;
    &--bordered {
      #{$heading}__title {
        border-bottom: 2px solid $color-secondary;
      }
    }

    &__title {
      text-transform: uppercase;
      color: $color-accent;
    }
  }
</style>
