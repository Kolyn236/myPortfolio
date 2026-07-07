import type { ReactNode } from 'react'
import { contact as contactLinks } from '../data/content'
import { useContent } from '../context/LanguageContext'
import { getExternalHref, getMailtoHref } from '../lib/contacts'
import { ExternalLink } from './ExternalLink'
import styles from './ContactLinks.module.css'

type ContactLinksVariant = 'hero' | 'inline' | 'footer'

interface ContactLinksProps {
  variant: ContactLinksVariant
  /** Primary email button label (hero / CTA only) */
  primaryLabel?: string
  primaryClassName?: string
}

function UnconfiguredLink({ label }: { label: string }) {
  const { a11y } = useContent()

  return (
    <span className={styles.unconfigured} title={a11y.contactSetupHint} aria-disabled="true">
      {label}
      <span className="sr-only">{a11y.contactNotConfigured}</span>
    </span>
  )
}

function EmailLink({
  className,
  children,
  linkClassName,
}: {
  className?: string
  children: ReactNode
  linkClassName?: string
}) {
  const href = getMailtoHref()
  if (!href) {
    return <UnconfiguredLink label={String(children)} />
  }
  return (
    <a href={href} className={className ?? linkClassName}>
      {children}
    </a>
  )
}

export function PrimaryContactButton({
  label,
  className = 'btn btn-primary',
}: {
  label: string
  className?: string
}) {
  return <EmailLink className={className}>{label}</EmailLink>
}

export function ContactLinks({
  variant,
  primaryLabel,
  primaryClassName = 'btn btn-primary',
}: ContactLinksProps) {
  const { contact } = useContent()
  const resolvedPrimaryLabel = primaryLabel ?? contact.primaryLabel

  const externalChannels = [
    { key: 'linkedin' as const, label: contact.linkedin },
    { key: 'github' as const, label: contact.github },
    { key: 'cv' as const, label: contact.cv },
  ]

  if (variant === 'hero') {
    return (
      <div className={styles.heroActions}>
        <EmailLink className={primaryClassName}>{resolvedPrimaryLabel}</EmailLink>
        <div className={styles.secondaryLinks}>
          {externalChannels
            .filter((ch) => ch.key !== 'linkedin')
            .map(({ key, label }) => {
              const href = getExternalHref(key)
              if (!href) {
                return <UnconfiguredLink key={key} label={label} />
              }
              return (
                <ExternalLink key={key} href={href} className={styles.textLink}>
                  {key === 'github' ? contact.viewGithub : contact.downloadCv}
                </ExternalLink>
              )
            })}
        </div>
      </div>
    )
  }

  const linkClass = variant === 'footer' ? styles.footerLink : styles.inlineLink
  const listClass = variant === 'footer' ? styles.footerList : styles.inlineList

  return (
    <ul className={listClass}>
      <li>
        <EmailLink linkClassName={linkClass}>{contactLinks.email}</EmailLink>
      </li>
      {externalChannels.map(({ key, label }) => {
        const href = getExternalHref(key)
        return (
          <li key={key}>
            {href ? (
              <ExternalLink href={href} className={linkClass}>
                {label}
              </ExternalLink>
            ) : (
              <UnconfiguredLink label={label} />
            )}
          </li>
        )
      })}
    </ul>
  )
}
