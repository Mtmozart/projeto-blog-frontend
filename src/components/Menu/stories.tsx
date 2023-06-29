import { Meta, StoryFn } from '@storybook/react';
import { Menu, MenuProps } from '.';
import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta<typeof Menu>;

export const Template: StoryFn<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
