import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  content,
  LOCALE_STORAGE_KEY,
  type Locale,
  type LocalizedContent,
} from '../data/content'
import {
  detectInitialLocale,
  detectLocaleForRootPath,
  getLocaleFromPath,
  pushLocalePath,
} from '../lib/localeUrl'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: LocalizedContent
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function applyDocumentLocale(locale: Locale, seo: LocalizedContent['seo']) {
  document.documentElement.lang = locale
  document.title = seo.title

  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', seo.description)

  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', seo.ogTitle)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', seo.ogDescription)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(LOCALE_STORAGE_KEY, next)
    pushLocalePath(next)
  }, [])

  const t = content[locale]

  useEffect(() => {
    applyDocumentLocale(locale, t.seo)
  }, [locale, t.seo])

  useEffect(() => {
    const syncLocaleFromUrl = () => {
      const fromUrl = getLocaleFromPath(window.location.pathname)
      if (fromUrl) {
        setLocaleState(fromUrl)
        localStorage.setItem(LOCALE_STORAGE_KEY, fromUrl)
        return
      }

      setLocaleState(detectLocaleForRootPath())
    }

    window.addEventListener('popstate', syncLocaleFromUrl)
    return () => window.removeEventListener('popstate', syncLocaleFromUrl)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}

export function useContent() {
  return useLanguage().t
}
