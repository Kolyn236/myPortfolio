import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, type Locale } from '../data/content'

const LOCALE_PATTERN = /^\/(en|ru)(\/|$)/

/** Read locale from pathname when it starts with /en or /ru. */
export function getLocaleFromPath(pathname: string): Locale | null {
  const match = pathname.match(LOCALE_PATTERN)
  if (match?.[1] === 'en' || match?.[1] === 'ru') return match[1]
  return null
}

export function isRootPath(pathname: string): boolean {
  return pathname === '/' || pathname === ''
}

/** Shareable path for a locale, e.g. /en or /ru. */
export function getLocalePath(locale: Locale): string {
  return `/${locale}`
}

/** Full shareable URL for a locale on the current origin. */
export function getShareableLocaleUrl(locale: Locale): string {
  return `${window.location.origin}${getLocalePath(locale)}`
}

function detectLocaleWithoutUrl(): Locale {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored === 'en' || stored === 'ru') return stored

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('ru')) return 'ru'

  return DEFAULT_LOCALE
}

/** Initial locale: URL prefix wins, otherwise localStorage → browser → default. */
export function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const fromUrl = getLocaleFromPath(window.location.pathname)
  if (fromUrl) {
    localStorage.setItem(LOCALE_STORAGE_KEY, fromUrl)
    return fromUrl
  }

  return detectLocaleWithoutUrl()
}

/** Locale when pathname has no /en or /ru prefix (e.g. after navigating back to /). */
export function detectLocaleForRootPath(): Locale {
  return detectLocaleWithoutUrl()
}

/** Update the URL to a locale path without reloading; preserves query and hash. */
export function pushLocalePath(locale: Locale): void {
  const { pathname, search, hash } = window.location
  const targetPath = getLocalePath(locale)
  const nextUrl = `${targetPath}${search}${hash}`

  if (`${pathname}${search}${hash}` !== nextUrl) {
    window.history.pushState({ locale }, '', nextUrl)
  }
}
