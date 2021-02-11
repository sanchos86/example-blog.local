<template>
  <div class="root">
    <Header />
    <main class="main py-4">
      <div class="container">
        <div class="row">
          <nuxt />
          <Aside />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Aside from '~/components/layout/Aside.vue';
  import Header from '~/components/layout/Header.vue';
  import Footer from '~/components/layout/Footer.vue';

  export default {
    components: {
      Aside,
      Header,
      Footer
    }
  };
</script>

<style lang="scss" scoped>
  .root {
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex-grow: 1;
  }
</style>
