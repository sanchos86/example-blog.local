<template>
  <div class="nothing-found">
    <div class="nothing-found__icon-wrap mb-4">
      <i class="nothing-found__icon fas fa-search fa-4x" />
    </div>
    <ui-heading
      title="Записей не найдено"
      :level="4"
      :bordered="false"
    />
  </div>
</template>

<style lang="scss" scoped>
  .nothing-found {
    text-align: center;
  }
</style>
