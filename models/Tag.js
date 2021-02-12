import Model from '@/models/Model';

export default class Tag extends Model {
  constructor(tag = {}) {
    super();
    this.raw = tag;
    this.id = tag.id;
    this.name = tag.name;
    this.slug = tag.slug;
  }
}
