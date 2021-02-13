<template>
  <PostSkeleton v-if="loading.initial" class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0" />
  <article v-else class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0 post">
    <header class="post__header">
      <h1 class="post__title">
        {{ post.title }}
      </h1>
      <div class="post__meta">
        <nuxt-link class="post__category-link" :to="to">
          {{ post.category && post.category.name }}
        </nuxt-link>
        <span class="post__date">
          {{ post.publishedAt | formatDate }}
        </span>
        &hyphen;
        <span class="post__views">
          <font-awesome-icon :icon="['fas', 'eye']" size="sm" />
          <span class="post__views-count">
            {{ post.postViews }}
          </span>
        </span>
      </div>
    </header>
    <div class="post__thumb">
      <img class="post__img" :src="post.src" :alt="post.title">
    </div>
    <div class="post__content">
      {{ post.text }}
    </div>
    <footer class="post__footer">
      <div v-if="post.tags && post.tags.length" class="post__tags">
        <Tag
          v-for="(tag, index) in post.tags"
          :key="index"
          :tag="tag"
          size="small"
          rounded
        />
      </div>
    </footer>
  </article>
</template>

<script>
  import serviceNames from '~/constants/serviceNames';

  import Tag from '~/components/Tag.vue';
  import PostSkeleton from '~/components/PostSkeleton.vue';

  export default {
    components: {
      Tag,
      PostSkeleton
    },
    async fetch() {
      const { params: { slug }, $Container } = this.$nuxt.context;
      try {
        this.post = await $Container.get(serviceNames.POSTS_SERVICE).getPost(slug);
      } finally {
        this.loading.initial = false;
      }
    },
    data() {
      return {
        post: {},
        loading: {
          initial: true
        }
      };
    },
    middleware({ redirect, params }) {
      if (!params.slug) {
        return redirect({ name: 'index' });
      }
    },
    computed: {
      to() {
        const categorySlug = this.post.category && this.post.category.slug;
        return { name: 'categories-slug', params: { slug: categorySlug } };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .post {
    &__category-link {
      margin-right: map_get($gaps, 2);
      font-size: $font-sm;
      font-weight: 700;
      color: $color-secondary;
      text-transform: uppercase;
    }

    &__title {
      margin-bottom: map-get($gaps, 1);
      font-size: 2rem;
      font-weight: 500;
      line-height: normal;
      color: $color-accent;
    }

    &__meta {
      margin-bottom: map-get($gaps, 4);
      color: $color-grey;
      font-size: $font-sm;
    }

    &__thumb {
      margin-bottom: map_get($gaps, 2);
    }

    &__img {
      width: 100%;
      display: block;
    }

    &__content {
      margin-bottom: map-get($gaps, 6);
      font-size: $font-lg;
    }

    &__tags {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
