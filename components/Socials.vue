<template>
  <ul class="socials">
    <li v-for="social in socials" :key="social.id" class="socials__item">
      <a
        class="socials__link"
        :class="`socials__link--${social.icon}`"
        target="_blank"
        :href="social.url"
        :title="social.name"
      >
        <font-awesome-icon :icon="['fab', social.icon]" size="lg" />
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        socials: [
          {
            name: 'Github',
            url: 'https://github.com/sanchos86',
            icon: 'github'
          },
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/aleksandr-aladin/',
            icon: 'linkedin'
          },
          {
            name: 'Telegram',
            url: 'https://t.me/aleksandr_aladin',
            icon: 'telegram'
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .socials {
    display: inline-flex;

    &__item {
      margin: 0 0 0 map-get($gaps, 2);
    }

    &__link {
      display: inline-flex;

      &--github {
        color: #24292e;
      }

      &--linkedin {
        color: #2977c9;
      }

      &--telegram {
        color: #0088cc;
      }

    }
  }
</style>
