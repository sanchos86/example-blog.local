<template>
  <div class="loader">
    <div class="loader__spinner">
      <div class="loader__spinner-item loader__spinner-item--1" />
      <div class="loader__spinner-item loader__spinner-item--2" />
      <div class="loader__spinner-item loader__spinner-item--3" />
      <div class="loader__spinner-item loader__spinner-item--4" />
      <div class="loader__spinner-item loader__spinner-item--5" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UiLoader'
  };
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: map_get($z-indices, 5);
    background-color: rgba(255, 255, 255, 0.25);

    &__spinner {
      position: absolute;
      display: flex;
      height: 40px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__spinner-item {
      width: 6px;
      height: 100%;
      margin: 0 1px;
      background-color: #e74c3c;
      animation: stretch 0.9s infinite ease-in-out;
    }

    &__spinner-item--2 {
      animation-delay: 0.1s;
    }

    &__spinner-item--3 {
      animation-delay: 0.2s;
    }

    &__spinner-item--4 {
      animation-delay: 0.3s;
    }

    &__spinner-item--5 {
      animation-delay: 0.4s;
    }

    @keyframes stretch {
      0% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
      40% {
        transform: scaleY(0.4);
      }
      100% {
        transform: scaleY(0.4);
      }
    }
  }
</style>
