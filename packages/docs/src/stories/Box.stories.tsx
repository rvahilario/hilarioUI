import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@hilario-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span
          style={{
            fontFamily: 'monospace',
            color: '#FFF',
          }}
        >
          Testando o elemento Box
        </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
