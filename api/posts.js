export default HttpService => ({
  getPosts(params = {}) {
    const url = '/api/posts';
    return HttpService.get(url, params);
  },
  getPost(postId) {
    const url = `/api/posts/${postId}`;
    return HttpService.get(url);
  },
  getLatestPosts() {
    const url = '/api/posts/latest';
    return HttpService.get(url);
  }
});
