<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4">
    <ui-heading class="mb-4" title="О блоге" :level="4" />
    <div class="about">
      <div class="about__photo-wrap mr-4">
        <img class="about__photo" src="~/assets/images/photo.jpg" alt="">
      </div>
      <div class="about__info">
        <p class="about__text mb-3">
          Привет! Меня зовут Александр, я занимаюсь веб-разработкой с уклоном во фронтенд.
        </p>
        <p class="about__text mb-3">
          Этот блог создан для того, чтобы сохранить свои наработки и другую полезную информацию в одном месте(и, возможно, потренироваться в переводе статей с английского). На данный момент моя работа связана со Vue-стеком, поэтому большинство статей будет "около" Vue.
        </p>
        <p class="about__text">
          Если у вас есть какие-либо вопросы или предложения, пишите на почту или в телеграм - постараюсь ответить!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'О блоге | web-artisan.ru'
      };
    }
  };
</script>

<style lang="scss" scoped>
  .about {
    clear: both;

    &__photo-wrap {
      width: 160px;
      height: 160px;
      float: left;
    }

    &__photo {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: $border-radius;
      background-color: $color-grey-light;
    }
  }
</style>
