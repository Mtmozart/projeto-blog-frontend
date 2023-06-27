import { ArticleMetaProps } from '.';
import { data } from '../../api/data.json';
const { author, categories } = data.posts.data[0].attributes;
export default {
  createdAt: '2023-06-02T15:16:09.246+00:00',
  author,
  categories,
} as ArticleMetaProps;
