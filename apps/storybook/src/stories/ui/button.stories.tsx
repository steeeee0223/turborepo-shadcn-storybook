import { Button } from '@repo/ui';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Shadcn-UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', defaultValue: 'Button' },
    variant: { control: 'select' },
    onClick: { action: 'clicked', type: 'function' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};
