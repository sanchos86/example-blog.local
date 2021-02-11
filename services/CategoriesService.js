import serviceNames from '~/constants/serviceNames';

import Category from '~/models/Category';

export default class CategoryService {
  constructor(store, container) {
    this.store = store;
    this.container = container;
  }

  async getCategories() {
    let categories = await this.container.get(serviceNames.API_SERVICE).categories.getCategories();
    categories = categories.map(category => new Category(category));
    this.store.commit('setCategories', categories);
  }
}
