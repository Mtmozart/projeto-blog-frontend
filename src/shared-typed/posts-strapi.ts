import { StrapiImage } from './strapi-image';

export type PostsStrapi = {
  data: {
    id: string;
    attributes: {
      title: string;
      slug: string;
      content: string;
      cover: StrapiImage;
      excerpt: string;
      allowComments: boolean;
      tags: any; // Defina o tipo correto para tags
      author: any; // Defina o tipo correto para author
      categories: any; // Defina o tipo correto para categories
    };
  };
};
