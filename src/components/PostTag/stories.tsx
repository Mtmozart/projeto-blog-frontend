import { Meta, StoryFn } from '@storybook/react';
import { PostTags, PostTagProps } from '.';
import mock from './mock';

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock,
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof PostTags>;

export const Template: StoryFn<PostTagProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} />
    </div>
  );
};
export const NoTags: StoryFn<PostTagProps> = (args) => {
  return (
    <div style={{ padding: '0 2.4rem' }}>
      <PostTags {...args} tags={undefined} />
    </div>
  );
};
