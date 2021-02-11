export default class Category {
  constructor(category = {}) {
    this.raw = category;
    this.id = category.id;
    this.name = category.name;
    this.slug = category.slug;
  }
}
