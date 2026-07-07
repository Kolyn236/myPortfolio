import { useContent } from '../context/LanguageContext'
import styles from './AIDirection.module.css'

export function AIDirection() {
  const { aiDirection } = useContent()

  return (
    <section id="ai" className="section" aria-labelledby="ai-heading">
      <div className="container">
        <div className={styles.layout}>
          <div>
            <span className="section-label">{aiDirection.label}</span>
            <h2 id="ai-heading" className="section-title">
              {aiDirection.title}
            </h2>
            <p className={styles.intro}>{aiDirection.intro}</p>
          </div>
          <div className={styles.cards}>
            {aiDirection.points.map((point) => (
              <article key={point.title} className={`card ${styles.card}`}>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardText}>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
