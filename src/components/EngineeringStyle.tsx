import { useContent } from '../context/LanguageContext'
import styles from './EngineeringStyle.module.css'

export function EngineeringStyle() {
  const { engineeringStyle } = useContent()

  return (
    <section className={`section ${styles.wrapper}`} aria-labelledby="style-heading">
      <div className="container">
        <div className={styles.inner}>
          <div>
            <span className="section-label">{engineeringStyle.label}</span>
            <h2 id="style-heading" className={styles.quote}>
              {engineeringStyle.quotePrefix}{' '}
              <span className={styles.quoteAccent}>{engineeringStyle.quoteAccent}</span>
              {engineeringStyle.quoteSuffix}
            </h2>
          </div>
          <ul className={styles.list}>
            {engineeringStyle.points.map((point) => (
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
