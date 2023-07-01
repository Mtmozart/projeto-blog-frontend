import { PostsTemplatesProps } from '.';
import { data } from '../../api/data.json';
const posts = data.posts;
export default {
  settings: data.setting,
  posts,
} as PostsTemplatesProps;
