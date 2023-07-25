import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: 'string',
      control: 'text',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
const ButtonContent: EmotionJSX.Element = <Icon icon='storybook'/>

export const Contained: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Button variant='contained' label='Button' endicon={ButtonContent}/>
  )
};
