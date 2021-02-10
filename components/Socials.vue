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
        <img :src="require(`~/assets/images/svg/${social.icon}.svg`)" :alt="social.name">
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
            name: 'Facebook',
            url: 'https://www.facebook.com/Alexandr.Aladin.7370013',
            icon: 'facebook'
          },
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/',
            icon: 'linkedin'
          },
          {
            name: 'Telegram',
            url: 'https://web.telegram.org/',
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
    }
  }
</style>
