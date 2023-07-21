import { data } from '../api/data.json';
import { Author } from '../shared-types/author';
import { Category } from '../shared-types/category';
import { StrapiImage } from '../shared-types/strapi-image';
import { PostTag } from '../shared-types/tag';

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover: StrapiImage;
  excerpt: string;
  allowComments: boolean;
  tags: PostTag[];
  author: Author;
  category: Category;
}
const postsJson = data.posts.data;
const postsQtd = postsJson.length;
const postsApi: Post[] = [];

for (let i = 0; i < postsQtd; i++) {
  const { id } = postsJson[i];
  const {
    title,
    slug,
    content,
    excerpt,
    cover,
    allowComments,
    author,
    category,
  } = postsJson[i].attributes;
  const tags = postsJson[i].attributes.tags.data;

  const post: Post = {
    id,
    title,
    slug,
    content,
    cover,
    excerpt,
    allowComments,
    tags,
    author,
    category,
  };

  postsApi.push(post);
}

export default postsApi;
