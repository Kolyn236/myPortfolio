import { useContent } from '../context/LanguageContext'
import styles from './OpenTo.module.css'

export function OpenTo() {
  const { openTo } = useContent()

  return (
    <section id="open-to" className={`section ${styles.wrapper}`} aria-labelledby="open-heading">
      <div className="container">
        <span className="section-label">{openTo.label}</span>
        <h2 id="open-heading" className="section-title">
          {openTo.title}
        </h2>
        <p className="section-subtitle section-subtitle-spaced-sm">
          {openTo.subtitle}
        </p>
        <ul className={styles.list}>
          {openTo.items.map((item) => (
            <li key={item} className={styles.item}>
              <svg
                className={styles.check}
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
