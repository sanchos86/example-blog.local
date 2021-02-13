<template>
  <Paginate
    container-class="pagination"
    page-link-class="pagination__link"
    next-link-class="pagination__link pagination__link--next"
    prev-link-class="pagination__link pagination__link--prev"
    active-class="pagination__link--active"
    disabled-class="pagination__link--disabled"
    :value="currentPage"
    :page-count="pageCount"
    :click-handler="onClick"
    no-li-surround
  />
</template>

<script>
  import Paginate from 'vuejs-paginate/src/components/Paginate.vue';

  export default {
    components: {
      Paginate
    },
    props: {
      pageCount: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    methods: {
      onClick(page) {
        this.$emit('click', page);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: center;

    ::v-deep  &__link {
      display: inline-flex;
      padding: 0.5rem 0.75rem;
      margin: 0.125rem;
      color: $color-white;
      background-color: $color-accent;
      border-radius: $border-radius;

      &--active {
        background-color: $color-secondary;
      }

      &--disabled {
        background-color: lighten($color-accent, 25%);
        cursor: not-allowed;
      }
    }
  }
</style>
