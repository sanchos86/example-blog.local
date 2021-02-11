import Tag from '~/models/Tag';
import Category from '~/models/Category';

export default class Post {
  constructor(post = {}) {
    this.raw = post;
    this.id = post.id;
    this.src = post.src;
    this.slug = post.slug;
    this.title = post.title;
    this.text = post.text;
    this.publishedAt = post.publishedAt;
  }

  get postViews() {
    return this.raw.postViews || 0;
  }

  get tags() {
    return (this.raw.tags || []).map(tag => new Tag(tag));
  }

  get category() {
    return new Category(this.raw.category);
  }
}
