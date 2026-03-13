import { forwardRef } from "react";
import styles from "../styles/Section.module.css";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, title, subtitle, children },
  ref
) {
  return (
    <section id={id} ref={ref} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.inner}>
        <header className={styles.header} data-reveal>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
});

export default Section;
