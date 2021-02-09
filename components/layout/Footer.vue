<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          &copy; {{ new Date().getFullYear() }} web-artisan.ru
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    padding: map-get($gaps, 4) 0;
    color: $color-white;
    background-color: $color-accent;
    text-align: center;
  }
</style>
