// ─────────────────────────────────────────────────────────────────────────────
// CONTACT LINKS — replace placeholders before sharing with recruiters
// ─────────────────────────────────────────────────────────────────────────────
// Set real values below. Links stay disabled (no broken mailto/href) until
// placeholders are replaced.

export const contact = {
  /** Your email address (without mailto:) */
  email: 'nikolkady@gmail.com',
  /** Full URL, e.g. https://github.com/yourname */
  github: 'https://github.com/Kolyn236',
  /** Full URL, e.g. https://linkedin.com/in/yourname */
  linkedin: 'https://www.linkedin.com/in/nikolay-dychkov-7a281a3bb/',
  /** Full URL to CV PDF or hosted resume */
  cv: 'https://ndychkov.com',
} as const

export type ContactKey = keyof typeof contact

export { contentEn } from './content.en'
export { contentRu } from './content.ru'
export type { Locale, LocalizedContent } from './types'

import { contentEn } from './content.en'
import { contentRu } from './content.ru'
import type { Locale } from './types'

export const content = {
  en: contentEn,
  ru: contentRu,
} as const

export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_STORAGE_KEY = 'portfolio-locale'
