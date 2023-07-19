import { Meta, StoryFn } from '@storybook/react';
import { PostTemplate, PostTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'PostTemplate',
  component: PostTemplate,
  args: mock,
  parameters: {
    layout: 'fullscren',
    backgrounds: {
      default: '',
    },
  },
} as Meta<typeof PostTemplate>;

export const Template: StoryFn<PostTemplateProps> = (args) => {
  return (
    <div>
      <PostTemplate {...args} />
    </div>
  );
};
