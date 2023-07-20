import { Meta, StoryFn } from '@storybook/react';
import { Comments, CommentsProps } from '.';

export default {
  title: 'Comments',
  component: Comments,
} as Meta<typeof Comments>;

export const Template: StoryFn<CommentsProps> = (args) => {
  return (
    <div>
      <Comments {...args} />
    </div>
  );
};
