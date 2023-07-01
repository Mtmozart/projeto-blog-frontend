import { MenuPropsLinks } from '../components/Menu';
import { StrapiImage } from './strapi-image';

export type SettingsStrapi = {
  data: {
    id: string;
    attributes: {
      BlogName: string;
      blogDescription: string;
      logo: StrapiImage;
      menuLink: MenuPropsLinks[];
      text: string;
    };
  };
};
