import type { Meta, StoryObj } from '@storybook/react'
import Button from '../components/button/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['text', 'contained', 'outlined'],
    },
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    handleClick: {
      action: 'clicked',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    children: 'Click Me',
    size: 'md',
    variant: 'contained',
    isLoading: false,
    isDisabled: false,
  },
}

