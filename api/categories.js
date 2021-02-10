export default HttpService => ({
  getCategories() {
    const url = '/api/categories';
    return HttpService.get(url);
  }
});
