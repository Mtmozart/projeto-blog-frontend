import { data } from '../api/data.json';

//recebimeto de dados do strapi

const postsJson = data.posts.data;
const postsQtd = postsJson.length;
const postsApi: any[] = [];

for (let i = 0; i < postsQtd; i++) {
  const { id } = postsJson[i];
  const {
    title,
    slug,
    content,
    excerpt,
    cover,
    allowComments,
    author,
    categories,
  } = postsJson[i].attributes;
  const tags = postsJson[i].attributes.tags.data;

  const post = {
    id,
    title,
    slug,
    content,
    cover,
    excerpt,
    allowComments,
    tags,
    author,
    categories,
  };

  postsApi.push(post);
}

export default postsApi;
