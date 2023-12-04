import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@hilario-ui/react'

function DemoToast(props: ToastProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add to calendar</Button>
      <Toast open={isOpen} onOpenChange={setIsOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {},
  argTypes: {},
  decorators: [],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  render: DemoToast,
  args: {
    title: 'Schedule made',
    description: 'Wednesday, October 23rd at 4 PM',
  },
}
