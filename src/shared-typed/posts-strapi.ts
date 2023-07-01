import { StrapiImage } from './strapi-image';
export type PostsStrapi = {
  data: [
    {
      id: string;
      attributes: {
        title: string;
        slug: string;
        cover: StrapiImage;
        excerpt: string;
      };
    },
  ];
};
