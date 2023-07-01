import { Meta, StoryFn } from '@storybook/react';
import { PostsTemplates, PostsTemplatesProps } from '.';
import mock from './mock';
export default {
  title: 'PostsTemplates',
  component: PostsTemplates,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof PostsTemplates>;

export const Template: StoryFn<PostsTemplatesProps> = (args) => {
  return (
    <div>
      <PostsTemplates {...args} />
    </div>
  );
};
