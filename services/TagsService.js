import serviceNames from '~/constants/serviceNames';

import Tag from '~/models/Tag';

export default class TagService {
  constructor(store, container) {
    this.store = store;
    this.container = container;
  }

  async getTags() {
    let tags = await this.container.get(serviceNames.API_SERVICE).tags.getTags();
    tags = tags.map(tag => new Tag(tag));
    this.store.commit('setTags', tags);
  }
}
