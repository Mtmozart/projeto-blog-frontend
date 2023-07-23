import { Meta, StoryFn } from '@storybook/react';
import { BaseTemplate, BaseTemplateProps } from '.';
import mock from './mock';
export default {
  title: 'BaseTemplate',
  component: BaseTemplate,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta<typeof BaseTemplate>;

export const Template: StoryFn<BaseTemplateProps> = (args) => {
  return (
    <div>
      <BaseTemplate {...args} />
    </div>
  );
};
