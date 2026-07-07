import { useContent } from '../context/LanguageContext'
import styles from './Experience.module.css'

export function Experience() {
  const { experience } = useContent()

  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <span className="section-label">{experience.label}</span>
        <h2 id="experience-heading" className="section-title">
          {experience.title}
        </h2>
        <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
          {experience.subtitle}
        </p>
        <div className="grid-2">
          {experience.items.map((item) => (
            <article key={item.domain} className="card">
              <span className={styles.tag}>{item.tag}</span>
              <h3 className={styles.domain}>{item.domain}</h3>
              <ul className={styles.list}>
                {item.highlights.map((highlight) => (
                  <li key={highlight} className={styles.listItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
