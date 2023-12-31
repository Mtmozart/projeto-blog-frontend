import { Meta, StoryFn } from '@storybook/react';
import { PostsTemplate, PostsTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'PostsTemplates',
  component: PostsTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<typeof PostsTemplate>;

export const Template: StoryFn<PostsTemplateProps> = (args) => {
  return (
    <div>
      <PostsTemplate {...args} />
    </div>
  );
};
