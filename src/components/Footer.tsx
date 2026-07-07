import { useContent } from '../context/LanguageContext'
import { ContactLinks } from './ContactLinks'
import styles from './Footer.module.css'

export function Footer() {
  const { site, a11y } = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.copy}>
            &copy; {year} {site.name}
          </p>
          <p className={styles.role}>{site.role}</p>
        </div>
        <nav aria-label={a11y.footerNav}>
          <ContactLinks variant="footer" />
        </nav>
      </div>
    </footer>
  )
}
