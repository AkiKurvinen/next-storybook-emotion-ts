import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { Meta, StoryObj } from '@storybook/react'
import { Figure } from './Figure';

const meta: Meta<typeof Figure> = {
  title: 'Design System/Atoms/Figure',
  component: Figure,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const WithFigcaption : Story = {
  args: {
    src: './fish.jpg',
    alt: 'Picture of the fish',
    figcaption: 'Picture of the fish'
  },
};
export const WithoutFigcaption : Story = {
  args: {
    src: './bird.jpg',
    alt: 'Picture of the bird'
  },
};

