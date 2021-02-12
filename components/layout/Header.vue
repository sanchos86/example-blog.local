<template>
  <header class="header">
    <div class="header__top pb-4 pt-sm-4">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6">
            <h1 class="header__title justify-content-center justify-content-sm-start mb-2 mb-sm-0">
              <nuxt-link to="/" class="header__logo">
                web-artisan.ru
              </nuxt-link>
            </h1>
          </div>
          <div class="col-12 col-sm-6">
            <div class="header__socials justify-content-center justify-content-sm-end">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Navigation :categories="categories" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex';

  import Socials from '~/components/Socials.vue';
  import Navigation from '~/components/layout/Navigation.vue';

  export default {
    components: {
      Socials,
      Navigation
    },
    computed: {
      ...mapState([
        'categories'
      ])
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    &__bottom {
      background-color: $color-accent;
    }

    &__title,
    &__socials {
      height: 100%;
      display: flex;
      align-items: center;
    }

    &__socials {
      justify-content: flex-end;
    }

    &__logo {
      display: block;
      font-weight: 900;
      color: $color-accent;
    }

    &__search {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
