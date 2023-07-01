import { PostProps } from '../components/Post';
import { PostTagProps } from '../components/PostTag';

export type PostStrapi = PostProps & {
  tags: PostTagProps;
  slug: string;
};
