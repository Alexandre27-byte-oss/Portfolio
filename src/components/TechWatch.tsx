import { forwardRef } from "react";
import Section from "./Section";
import styles from "../styles/TechWatch.module.css";
import { techWatch } from "../data/techWatch";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const TechWatch = forwardRef<HTMLElement>(function TechWatch(_, ref) {
  useRevealOnScroll();

  return (
    <Section
      id="watch"
      title="Veille technologique"
      subtitle="Quelques sources fiables + un focus récent."
      ref={ref}
    >
      <div className={styles.wrap} data-reveal>
        <div className={styles.card}>
          <h3 className={styles.topic}>{techWatch.topic}</h3>
          <p className={styles.note}>{techWatch.note}</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.topic}>Sources</h3>
          <ul className={styles.sources}>
            {techWatch.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

export default TechWatch;
