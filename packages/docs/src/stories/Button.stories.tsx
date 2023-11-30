import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@hilario-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Save',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
