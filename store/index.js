import serviceNames from '~/constants/serviceNames';

export const state = () => ({
  categories: [],
  tags: [],
  latestPosts: [],
  perPage: 6
});

export const getters = {
  categoryName(state) {
    return (categorySlug) => {
      const category = state.categories.find(category => category.slug === categorySlug);
      return category ? category.name : '';
    };
  },
  tagName(state) {
    return (tagSlug) => {
      const tag = state.tags.find(tag => tag.slug === tagSlug);
      return tag ? tag.name : '';
    };
  }
};

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
  setLatestPosts(state, latestPosts) {
    state.latestPosts = latestPosts;
  }
};

export const actions = {
  async nuxtServerInit(context, { $Container }) {
    await $Container.get(serviceNames.CATEGORIES_SERVICE).getCategories();
    await $Container.get(serviceNames.TAGS_SERVICE).getTags();
    await $Container.get(serviceNames.POSTS_SERVICE).getLatestPosts();
  }
};
