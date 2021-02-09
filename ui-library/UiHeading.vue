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
        'heading--level-' + context.props.level,
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
    &--bordered {
      #{$heading}__title {
        border-bottom: 2px solid $color-secondary;
      }
    }

    &--level-2 {
      font-size: 30px;
    }

    &--level-3 {
      font-size: 24px;
    }

    &--level-4 {
      font-size: 18px;
    }

    &__title {
      text-transform: uppercase;
      color: $color-accent;
    }
  }
</style>
