import { ComponentProps, ReactNode } from 'react'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import {
  TooltipProvider,
  TooltipRoot,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
} from './styles'

export type TooltipProps = ComponentProps<typeof TooltipContent> & {
  children?: ReactNode
  content: string
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={0}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5} {...props}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
