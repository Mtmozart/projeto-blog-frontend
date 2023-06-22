import { Meta, StoryFn } from '@storybook/react';
import { GoToTop } from '.';

export default {
  title: 'GoToTop',
  component: GoToTop,
  args: {
    children: 'GoToTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta<typeof GoToTop>;

export const Template: StoryFn = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <GoToTop {...args} />
    </div>
  );
};
