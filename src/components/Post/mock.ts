import { PostProps } from '.';
import { data } from '../../api/data.json';

const { id } = data.posts.data[0];
const {
  title,
  slug,
  content,
  excerpt,
  cover,
  allowComments,
  author,
  categories,
} = data.posts.data[0].attributes;

export default {
  id,
  title,
  slug,
  content,
  excerpt,
  cover,
  allowComments,
  author,
  categories,
  createdAt: '2023-06-02T15:16:09.246+00:00',
} as PostProps;
