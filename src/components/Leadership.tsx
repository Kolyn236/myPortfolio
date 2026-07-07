import { useContent } from '../context/LanguageContext'
import styles from './Leadership.module.css'

export function Leadership() {
  const { leadership } = useContent()

  return (
    <section id="leadership" className={`section ${styles.wrapper}`} aria-labelledby="leadership-heading">
      <div className="container">
        <div className={styles.inner}>
          <div>
            <span className="section-label">{leadership.label}</span>
            <h2 id="leadership-heading" className={styles.title}>
              {leadership.title}
            </h2>
            <p className={styles.text}>{leadership.text}</p>
          </div>
          <ul className={styles.list}>
            {leadership.bullets.map((point) => (
              <li key={point} className={styles.item}>
                <svg
                  className={styles.marker}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
