import { PostProps } from '.';
import { data } from '../../api/data.json';
import postsApi from '../../utils/format-dataApi';

const {
  id,
  title,
  slug,
  content,
  excerpt,
  cover,
  allowComments,
  author,
  categories,
} = postsApi[0];

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
