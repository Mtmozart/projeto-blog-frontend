import { PostsTemplateProps } from '.';
import { data } from '../../api/data.json';
const { setting, posts } = data;

const postsTemplate: PostsTemplateProps = {
  settings: setting,
  posts: posts,
};

export default postsTemplate;
