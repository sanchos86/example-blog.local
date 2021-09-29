import Category from '~/models/Category';

export default class CategoryService {
  constructor(apiService, store) {
    this.apiService = apiService;
    this.store = store;
  }

  async getCategories() {
    let categories = await this.apiService.categories.getCategories();
    categories = categories.map(category => new Category(category));
    this.store.commit('setCategories', categories);
  }
}
