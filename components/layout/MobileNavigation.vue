<template>
  <div class="mobile-nav">
    <div class="mobile-nav__top">
      <button
        type="button"
        class="mobile-nav__close-btn"
        @click="toggleMobileNavigation"
      >
        <i class="fas fa-times" />
      </button>
    </div>
    <ul class="mobile-nav__list">
      <li class="mobile-nav__item">
        <nuxt-link
          class="mobile-nav__link"
          :to="{ name: 'index' }"
          @click.native="toggleMobileNavigation"
        >
          <span>Главная</span>
        </nuxt-link>
      </li>
      <li class="mobile-nav__item">
        <a class="mobile-nav__link" @click="isCategoriesOpened = !isCategoriesOpened">
          <span>Категории</span>
          <i class="mobile-nav__link-icon fas" :class="[ isCategoriesOpened ? 'fa-angle-up' : 'fa-angle-down' ]" />
        </a>
        <ul v-if="isCategoriesOpened" class="mobile-nav__list mobile-nav__list--subnav">
          <li
            v-for="category in categories"
            :key="category.id"
            class="mobile-nav__item"
          >
            <nuxt-link
              class="mobile-nav__link"
              :to="{ name: 'categories-slug', params: { slug: category.slug } }"
              @click.native="toggleMobileNavigation"
            >
              <span>{{ category.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="mobile-nav__item">
        <nuxt-link
          class="mobile-nav__link"
          :to="{ name: 'about' }"
          @click.native="toggleMobileNavigation"
        >
          <span>О блоге</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isCategoriesOpened: true
      };
    },
    methods: {
      toggleMobileNavigation() {
        this.$emit('toggle-mobile-navigation', false);
      }
    }
  };
</script>

<style lang="scss">
  .mobile-nav {
    $mobileNav: &;
    padding: map_get($gaps, 6);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: map_get($z-indices, 6);
    background-color: $color-white;

    &__top {
      margin-bottom: map_get($gaps, 2);
    }

    &__close-btn {
      padding: 0;
      color: $color-accent;
      border: 0;
      outline: 0;
      background-color: transparent;
      font-size: $font-lg * 1.25;
    }

    &__list {
      &--subnav {
        #{$mobileNav}__link {
          padding-left: map_get($gaps, 4);
        }
      }
    }

    &__link {
      padding: map_get($gaps, 1) 0;
      display: flex;
      align-items: center;
      color: $color-accent;
      text-transform: uppercase;
      font-weight: bold;
      font-size: $font-md;
    }

    &__link-icon {
      margin-left: map-get($gaps, 2);
    }
  }
</style>
