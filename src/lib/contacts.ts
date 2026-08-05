import { contact, type ContactKey } from '../data/content'
import type { Locale } from '../data/types'

const PLACEHOLDER = /^\[PUT_.*_HERE\]$/

/** True when the value is still a [PUT_*_HERE] placeholder. */
export function isContactPlaceholder(value: string): boolean {
  return PLACEHOLDER.test(value)
}

/** mailto href, or null if email is not configured yet. */
export function getMailtoHref(): string | null {
  return isContactPlaceholder(contact.email) ? null : `mailto:${contact.email}`
}

/** External URL, or null if still a placeholder. */
export function getExternalHref(key: Exclude<ContactKey, 'email' | 'cvEn' | 'cvRu'>): string | null {
  const value = contact[key]
  return isContactPlaceholder(value) ? null : value
}

/** Locale-specific CV URL, or null if still a placeholder. */
export function getCvHref(locale: Locale): string | null {
  const value = locale === 'ru' ? contact.cvRu : contact.cvEn
  return isContactPlaceholder(value) ? null : value
}
