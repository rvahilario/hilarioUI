import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@hilario-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rvahilario.png',
    alt: `Renan Hilário's Github avatar.`,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
