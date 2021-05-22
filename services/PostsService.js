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

  async getLatestPosts() {
    let latestPosts = await this.container.get(serviceNames.API_SERVICE).posts.getLatestPosts();
    latestPosts = latestPosts.map(post => new Post(post));
    this.store.commit('setLatestPosts', latestPosts);
  }
}
