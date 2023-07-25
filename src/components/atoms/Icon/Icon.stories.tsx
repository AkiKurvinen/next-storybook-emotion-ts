import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const MUIIcon: Story = {
  args: {
    icon: 'arrowright',
    fill: 'black',
  },
};

export const CustomSVGIcon: Story = {
  args: {
    icon: 'storybook',
    fill: 'black',
  },
};

export const HeroiconsDotCom: Story = {
  args: {
    icon: 'heroicons',
    fill: 'none',
    stroke: 'black',
  },
};
