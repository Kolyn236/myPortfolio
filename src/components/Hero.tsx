import { useContent } from '../context/LanguageContext'
import { ContactLinks } from './ContactLinks'
import styles from './Hero.module.css'

const PORTRAIT_SRC = '/profile.jpg'
const PORTRAIT_SIZE = 280

export function Hero() {
  const { site, hero, contact } = useContent()
  const h1Text = `${site.name} — ${site.role}`

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={`${styles.layout} animate-in`}>
          <div className={styles.text}>
            <h1 id="hero-heading" className={styles.headline}>
              {h1Text}
            </h1>
            <p className={styles.valueLine}>{site.valueLine}</p>
            <p className={styles.proofLine}>{site.proofLine}</p>
            <p className={styles.leadershipLine}>{site.leadershipLine}</p>
            <p className={styles.locationLine}>{site.locationLine}</p>
            <p className={styles.availability}>
              <span className={styles.statusDot} aria-hidden="true" />
              {site.availability}
            </p>
            <ContactLinks variant="hero" primaryLabel={contact.primaryLabel} />
          </div>

          <figure className={styles.portrait}>
            <img
              src={PORTRAIT_SRC}
              alt={hero.portraitAlt}
              width={PORTRAIT_SIZE}
              height={PORTRAIT_SIZE}
              loading="eager"
              decoding="async"
              className={styles.portraitImage}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
