import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="#">Matheus Mozart, sempre fazendo as coisas com carinho!❤</a></p>`,
  },
} as Meta<typeof Footer>;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Footer {...args} />
    </div>
  );
};
