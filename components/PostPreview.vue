<template>
  <article class="post-preview mb-4" :class="classes">
    <nuxt-link
      class="post-preview__thumb"
      :to="{ name: 'posts-slug', params: { slug: post.slug } }"
    >
      <img class="post-preview__img" :src="post.src" :alt="post.title">
    </nuxt-link>
    <div class="post-preview__data" :class="{ 'mb-2': withControl }">
      <h6 class="post-preview__title">
        <nuxt-link
          class="post-preview__link"
          :to="{ name: 'posts-slug', params: { slug: post.slug } }"
        >
          {{ post.title }}
        </nuxt-link>
      </h6>
      <span class="post-preview__date">
        {{ post.publishedAt | formatDate }}
      </span>
      <p v-if="type === 'default' && post.plainText" class="post-preview__text">
        {{ post.plainText | cropText(75) }}
      </p>
    </div>
    <div v-if="withControl" class="post-preview__control">
      <ui-button @click="onClick">
        Читать далее
      </ui-button>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      },
      type: {
        type: String,
        default: 'default' // aside, related
      },
      withControl: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        return [
          `post-preview--${this.type}`
        ];
      }
    },
    methods: {
      onClick() {
        this.$router.push({ name: 'posts-slug', params: { slug: this.post.slug } });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .post-preview {
    $postPreview: &;
    display: flex;

    &__img {
      display: block;
      width: 100%;
    }

    &__link {
      color: $color-accent;
    }

    &__title {
      margin-bottom: map_get($gaps, 1);
      font-size: $font-lg;
      font-weight: 600;
      line-height: normal;
    }

    &__date {
      margin-bottom: map_get($gaps, 1);
      font-size: $font-md;
      color: $color-grey;
    }

    &--default {
      flex-direction: column;

      #{$postPreview} {
        &__thumb {
          margin-bottom: map_get($gaps, 2);
        }
      }
    }

    &--aside {
      #{$postPreview} {
        &__thumb {
          max-width: 125px;
          flex-shrink: 0;
          margin-right: map_get($gaps, 4);
        }

        &__data {
          flex-grow: 1;
        }
      }
    }
  }
</style>
