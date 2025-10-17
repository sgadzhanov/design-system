import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Input from '../components/input/Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    handleChange: {
      action: 'change',
    },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Playground: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      args.handleChange?.(e)
    }

    return (
      <div
        style={{ width: '300px', margin: 'auto' }}
      >
        <Input
          {...args}
          value={value}
          handleChange={handleChange}
        />
      </div>
    )
  },
  args: {
    id: 'example-input',
    label: 'Label',
    type: 'text',
    placeholder: 'Test me...',
    required: false,
    value: '',
    error: '',
  },
}

export const WithError: Story = {
  args: {
    id: 'error-input',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    value: '',
    error: 'Invalid email address',
    required: true,
  },
}

export const Password: Story = {
  args: {
    id: 'password-input',
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    value: '',
    required: true,
  },
}
