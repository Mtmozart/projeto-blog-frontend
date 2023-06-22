import { Meta, StoryFn } from '@storybook/react';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/planet.png',
    link: 'http://localhost',
    newTab: false,
  },
} as Meta<typeof LogoLink>;

export const ImageOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: StoryFn<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
