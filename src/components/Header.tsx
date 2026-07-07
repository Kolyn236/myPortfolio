import { useCallback, useEffect, useId, useState } from 'react'
import { useContent } from '../context/LanguageContext'
import { getMailtoHref } from '../lib/contacts'
import { LanguageSwitcher } from './LanguageSwitcher'
import styles from './Header.module.css'

export function Header() {
  const { navItems, contact, a11y } = useContent()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()
  const contactHref = getMailtoHref() ?? '#contact'

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen, closeMenu])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) closeMenu()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [closeMenu])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#main-content" className={styles.logo} aria-label={a11y.logoLabel}>
          ND<span className={styles.logoAccent}>.</span>
        </a>

        <nav className={styles.desktopNav} aria-label={a11y.mainNav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a href={contactHref} className={styles.navCta}>
            {contact.navLabel}
          </a>
        </nav>

        <div className={styles.mobileControls}>
          <LanguageSwitcher />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? a11y.closeMenu : a11y.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>

      <nav
        id={menuId}
        className={styles.mobileNav}
        aria-label={a11y.mobileNav}
        hidden={!menuOpen}
      >
        <div className={`container ${styles.mobileNavInner}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a href={contactHref} className={styles.mobileNavCta} onClick={closeMenu}>
            {contact.navLabel}
          </a>
        </div>
      </nav>
    </header>
  )
}
