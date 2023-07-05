import { PostsTemplateProps } from '.';
import { data } from '../../api/data.json';
import postsApi from '../../utils/format-dataApi';

const postsTemplate: PostsTemplateProps = {
  settings: data.setting,
  posts: postsApi,
};

export default postsTemplate;
