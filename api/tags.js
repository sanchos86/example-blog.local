export default HttpService => ({
  getTags() {
    const url = '/api/tags';
    return HttpService.get(url);
  }
});
