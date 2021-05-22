<template>
  <aside class="aside col-12 col-sm-12 col-md-12 col-lg-4">
    <ui-heading class="mb-4" :level="4" title="Последние записи" />
    <div class="most-viewed mb-4">
      <PostPreview
        v-for="(post, index) in latestPosts"
        :key="index"
        type="aside"
        :post="post"
      />
    </div>
    <ui-heading class="mb-4" :level="4" title="Тэги" />
    <div class="tags mb-4">
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
      />
    </div>
  </aside>
</template>

<script>
  import { mapState } from 'vuex';

  import Tag from '~/components/Tag.vue';
  import PostPreview from '~/components/PostPreview.vue';

  export default {
    components: {
      Tag,
      PostPreview
    },
    computed: {
      ...mapState([
        'tags',
        'latestPosts'
      ])
    }
  };
</script>

<style lang="scss" scoped>
  .tags {
    display: flex;
    flex-wrap: wrap;
  }
</style>
