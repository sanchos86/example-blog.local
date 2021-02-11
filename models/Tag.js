export default class Tag {
  constructor(tag = {}) {
    this.raw = tag;
    this.id = tag.id;
    this.name = tag.name;
    this.slug = tag.slug;
  }
}
