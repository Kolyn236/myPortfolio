import type { ReactNode } from 'react'
import { VisuallyHidden } from './VisuallyHidden'

interface ExternalLinkProps {
  href: string
  className?: string
  children: ReactNode
}

export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <VisuallyHidden> (opens in new tab)</VisuallyHidden>
    </a>
  )
}
