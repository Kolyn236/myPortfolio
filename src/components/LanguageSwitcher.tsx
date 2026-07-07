import { useLanguage } from '../context/LanguageContext'
import styles from './LanguageSwitcher.module.css'

const locales = [
  { code: 'en' as const, label: 'EN' },
  { code: 'ru' as const, label: 'RU' },
]

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      className={styles.switcher}
      role="group"
      aria-label={t.a11y.languageSwitcher}
    >
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={styles.button}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
