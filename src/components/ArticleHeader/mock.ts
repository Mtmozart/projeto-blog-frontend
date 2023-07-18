import { ArticleHeaderProps } from '.';
import { data } from '../../api/data.json';

const { id } = data.posts.data[0];
const { title, excerpt, cover, author, category } =
  data.posts.data[0].attributes;

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  category,
  createdAt: '2023-06-02T15:16:09.246+00:00',
} as ArticleHeaderProps;
