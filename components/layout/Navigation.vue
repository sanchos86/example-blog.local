<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link class="nav__link" :to="{ name: 'index' }">
          <span>Главная</span>
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__link" :to="{ name: 'categories-slug' }">
          <span>Категории</span>
          <i class="nav__link-icon fas fa-angle-down" />
        </nuxt-link>
        <ul class="nav__list nav__list--subnav">
          <li
            v-for="category in categories"
            :key="category.id"
            class="nav__item"
          >
            <nuxt-link
              class="nav__link"
              :to="{ name: 'categories-slug', params: { slug: category.slug } }"
            >
              <span>{{ category.name }}</span>
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__link" :to="{ name: 'about' }">
          <span>О блоге</span>
        </nuxt-link>
      </li>
    </ul>
    <button type="button" class="nav__mobile-menu-switch" @click="toggleMobileNavigation(true)">
      <i class="fas fa-bars" />
    </button>
    <transition name="fade">
      <MobileNavigation
        v-show="isMobileNavigationOpened"
        :categories="categories"
        @toggle-mobile-navigation="toggleMobileNavigation"
      />
    </transition>
  </nav>
</template>

<script>
  import MobileNavigation from '~/components/layout/MobileNavigation.vue';

  export default {
    components: {
      MobileNavigation
    },
    props: {
      categories: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isMobileNavigationOpened: false
      };
    },
    watch: {
      isMobileNavigationOpened(newValue) {
        document.body.style.overflow = newValue ? 'hidden' : null;
      }
    },
    methods: {
      toggleMobileNavigation(bool) {
        this.isMobileNavigationOpened = bool;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .nav {
    &__list {
      display: none;
      .nuxt-link-exact-active {
        color: $color-white;
        background-color: $color-secondary;
      }
      &--subnav {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: map_get($z-indices, 5);
        flex-direction: column;
        display: none;
        min-width: 100%;
      }
    }
    &__item {
      position: relative;
      &:hover {
        .nav__list--subnav {
          display: flex;
        }
      }
    }
    &__link {
      display: flex;
      align-items: center;
      padding: map-get($gaps, 3) map-get($gaps, 4);
      background-color: $color-accent;
      color: $color-white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: $font-md;
      cursor: pointer;
      transition: 0.1s background-color ease;
      &:hover {
        background-color: $color-secondary;
      }
    }
    &__link-icon {
      margin-left: map-get($gaps, 2);
    }

    &__mobile-menu-switch {
      display: flex;
      align-items: center;
      padding: map-get($gaps, 3) map-get($gaps, 4);
      background-color: $color-secondary;
      color: $color-white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: $font-md;
      cursor: pointer;
      transition: 0.1s background-color ease;
      border: 0;
      outline: 0;
    }

    @media (min-width: map_get($grid-breakpoints, 'sm')) {
      .nav {
        &__list:not(.nav__list--subnav) {
          display: flex;
        }

        &__mobile-menu-switch {
          display: none;
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
