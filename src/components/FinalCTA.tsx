import { useContent } from '../context/LanguageContext'
import { ContactLinks, PrimaryContactButton } from './ContactLinks'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  const { finalCta, a11y } = useContent()

  return (
    <section id="contact" className={styles.cta} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.box}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <h2 id="cta-heading" className={styles.headline}>
              {finalCta.headline}
            </h2>
            <PrimaryContactButton label={finalCta.button} />
            <nav className={styles.linksNav} aria-label={a11y.contactNav}>
              <ContactLinks variant="inline" />
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
