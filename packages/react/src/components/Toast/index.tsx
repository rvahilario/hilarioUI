import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import {
  ToastProvider,
  ToastRoot,
  ToastData,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="down">
      <ToastRoot duration={3000} role="listitem" {...props}>
        <ToastData>
          <ToastTitle>{title}</ToastTitle>

          {description && <ToastDescription>{description}</ToastDescription>}
        </ToastData>

        <ToastClose aria-label="close button">
          <X />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
