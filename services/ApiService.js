export default class ApiService {
  constructor(httpService, api) {
    this.httpService = httpService;
    this.api = api;
    this.init();
  }

  init() {
    this.categories = this.api.categories(this.httpService);
    this.tags = this.api.tags(this.httpService);
    this.posts = this.api.posts(this.httpService);
  }
}
