import serviceNames from '~/constants/serviceNames';

import Post from '~/models/Post';

export default class PostService {
  constructor(store, container) {
    this.store = store;
    this.container = container;
  }

  async getPosts(params = {}) {
    const { data, meta } = await this.container.get(serviceNames.API_SERVICE).posts.getPosts(params);
    const posts = data.map(post => new Post(post));
    return { posts, meta };
  }

  async getPost(slug) {
    const post = await this.container.get(serviceNames.API_SERVICE).posts.getPost(slug);
    return new Post(post);
  }

  async getPopularPosts() {
    let popularPosts = await this.container.get(serviceNames.API_SERVICE).posts.getPopularPosts();
    popularPosts = popularPosts.map(popularPost => new Post(popularPost));
    this.store.commit('setPopularPosts', popularPosts);
  }
}
