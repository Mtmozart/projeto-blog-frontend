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
const post = {
  id,
  title,
  slug,
  content,
  excerpt,
  cover,
  allowComments,
  author,
  categories,
};

export default post;
