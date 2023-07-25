import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const ReactIconsFontawesome: Story = {
  args: {
    icon: 'react-fontawesome',
    fill: 'crimson'
  },
};
export const ReactIconsHeroicons: Story = {
  args: {
    icon: 'react-heroicons',
    fill: 'crimson'
  },
};
export const MUIIcon: Story = {
  args: {
    icon: 'mui-arrowright',
    fill: 'crimson',
  },
};

export const CustomSVGIcon: Story = {
  args: {
    icon: 'storybook',
    fill: 'crimson',
  },
};

export const StrokeSVG: Story = {
  args: {
    icon: 'stroke-svg',
    fill: 'none',
    stroke: 'crimson',
  },
};

