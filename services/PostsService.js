import Post from '~/models/Post';

export default class PostService {
  constructor(apiService, store) {
    this.apiService = apiService;
    this.store = store;
  }

  async getPosts(params = {}) {
    const { data, meta } = await this.apiService.posts.getPosts(params);
    const posts = data.map(post => new Post(post));
    return { posts, meta };
  }

  async getPost(slug) {
    const post = await this.apiService.posts.getPost(slug);
    return new Post(post);
  }

  async getLatestPosts() {
    let latestPosts = await this.apiService.posts.getLatestPosts();
    latestPosts = latestPosts.map(post => new Post(post));
    this.store.commit('setLatestPosts', latestPosts);
  }
}
