import Model from '@/models/Model';
import Tag from '~/models/Tag';
import Category from '~/models/Category';

export default class Post extends Model {
  constructor(post = {}) {
    super();
    this.raw = post;
    this.id = post.id;
    this.src = post.src;
    this.slug = post.slug;
    this.title = post.title;
    this.text = post.text;
    this.publishedAt = post.publishedAt;
    this.plainText = post.plainText;
  }

  get tags() {
    return (this.raw.tags || []).map(tag => new Tag(tag));
  }

  get category() {
    return new Category(this.raw.category);
  }
}
