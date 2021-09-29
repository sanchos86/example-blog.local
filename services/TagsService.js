import Tag from '~/models/Tag';

export default class TagService {
  constructor(apiService, store) {
    this.apiService = apiService;
    this.store = store;
  }

  async getTags() {
    let tags = await this.apiService.tags.getTags();
    tags = tags.map(tag => new Tag(tag));
    this.store.commit('setTags', tags);
  }
}
