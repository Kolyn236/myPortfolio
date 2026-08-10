import { useContent } from '../context/LanguageContext'
import styles from './TechStack.module.css'

export function TechStack() {
  const { techStack } = useContent()
  const { categoryLabels, categories } = techStack

  const entries = [
    { key: 'backend', items: categories.backend },
    { key: 'ai', items: categories.ai },
    { key: 'databases', items: categories.databases },
    { key: 'infrastructure', items: categories.infrastructure },
    { key: 'quality', items: categories.quality },
    { key: 'expanding', items: categories.expanding },
  ] as const

  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <div className="container">
        <span className="section-label">{techStack.label}</span>
        <h2 id="stack-heading" className="section-title">
          {techStack.title}
        </h2>
        <p className="section-subtitle section-subtitle-spaced">
          {techStack.subtitle}
        </p>
        <div className={styles.categories}>
          {entries.map(({ key, items }) => (
            <div
              key={key}
              className={`${styles.category} ${key === 'expanding' ? styles.expanding : ''}`}
            >
              <h3 className={styles.categoryTitle}>{categoryLabels[key]}</h3>
              <ul className={styles.badges}>
                {items.map((item) => (
                  <li key={item} className={styles.techBadge}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
