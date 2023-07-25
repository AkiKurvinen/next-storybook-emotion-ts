import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { Meta, StoryObj } from '@storybook/react'
import { Frame } from './Frame';

const meta: Meta<typeof Frame> = {
  title: 'Design System/Atoms/Frame',
  component: Frame,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Frame>;

export const Default: Story = {
  args: {
    src: './bird.jpg'
  },
};
