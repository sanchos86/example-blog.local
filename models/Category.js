import Model from '@/models/Model';

export default class Category extends Model {
  constructor(category = {}) {
    super();
    this.raw = category;
    this.id = category.id;
    this.name = category.name;
    this.slug = category.slug;
  }
}
