import * as Styled from './styles';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { BaseTemplate } from '../Base';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { PostGrid } from '../../components/PostGrid';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
