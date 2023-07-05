import { PostTemplateProps } from '.';
import { data } from '../../api/data.json';
import postsApi from '../../utils/format-dataApi';

export default {
  settings: data.setting,
  post: postsApi[0],
} as PostTemplateProps;
