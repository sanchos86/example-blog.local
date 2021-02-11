<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4">
    <template v-if="error.statusCode === 404">
      <ui-heading
        class="mb-4"
        title="Ошибка"
        :level="4"
      />
      <div class="error">
        <ui-heading
          class="mb-2"
          title="404"
          :level="2"
          :bordered="false"
        />
        <p class="error__text">
          Страница не найдена
        </p>
      </div>
    </template>
    <template v-else>
      {{ error }}
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true
      }
    },
    layout: 'default'
  };
</script>

<style>
  .error {
    text-align: center;
  }
</style>
