//recebimeto de dados do strapi
import { data } from '../api/data.json';

const dataApiQ = data;

export async function dataApi(): Promise<any[]> {
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
  return postsApi;
}
