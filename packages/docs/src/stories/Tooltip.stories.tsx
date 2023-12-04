import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps, Box } from '@hilario-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{ display: 'flex', padding: '$10', justifyContent: 'center' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const OverButton: StoryObj<TooltipProps> = {
  args: {
    content: 'Tooltip content',
    children: <Button>Hover here</Button>,
  },
}
