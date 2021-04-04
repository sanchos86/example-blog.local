<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
    <ui-heading class="mb-4" title="Последние записи" :level="1" />
    <template v-if="loading.initial">
      <div class="row">
        <div
          v-for="n in perPage"
          :key="n"
          class="col-12 col-sm-12 col-md-12 col-lg-6"
        >
          <PostPreviewSkeleton with-control />
        </div>
      </div>
    </template>
    <NothingFound v-else-if="!posts.length" />
    <template v-else>
      <div class="row position-relative">
        <ui-loader v-show="loading.pagination" />
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-12 col-sm-12 col-md-12 col-lg-6"
        >
          <PostPreview :post="post" with-control />
        </div>
      </div>
      <Pagination
        v-if="total > perPage"
        :current-page="currentPage"
        :page-count="pageCount"
        @click="onClick"
      />
    </template>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import serviceNames from '~/constants/serviceNames';

  import Pagination from '~/components/Pagination.vue';
  import PostPreview from '~/components/PostPreview.vue';
  import NothingFound from '~/components/NothingFound.vue';
  import PostPreviewSkeleton from '~/components/PostPreviewSkeleton.vue';

  export default {
    components: {
      Pagination,
      PostPreview,
      NothingFound,
      PostPreviewSkeleton
    },
    async fetch() {
      try {
        const { page = 1 } = this.$route.query;
        await this.getPosts(page);
      } finally {
        this.loading.initial = false;
      }
    },
    data() {
      return {
        posts: [],
        currentPage: 1,
        total: 0,
        loading: {
          initial: true,
          pagination: false
        }
      };
    },
    computed: {
      ...mapState([
        'perPage'
      ]),
      pageCount() {
        return Math.ceil(this.total / this.perPage);
      }
    },
    watch: {
      '$route.query'(newValue) {
        (async() => {
          try {
            this.loading.pagination = true;
            if (newValue.page) {
              await this.getPosts(newValue.page);
            } else {
              await this.getPosts(1);
            }
          } finally {
            this.loading.pagination = false;
          }
        })();
      }
    },
    methods: {
      async getPosts(page) {
        const { $Container } = this.$nuxt.context;
        const { perPage } = this;
        this.currentPage = Number(page);
        const {
          posts,
          meta: {
            total
          }
        } = await $Container.get(serviceNames.POSTS_SERVICE).getPosts({ page, perPage });
        this.posts = posts;
        this.total = total;
      },
      async onClick(page) {
        await this.$router.push({ name: 'index', query: { page } });
      }
    },
    head() {
      return {
        title: 'Главная | web-artisan.ru'
      };
    }
  };
</script>
