import { forwardRef } from "react";
import Section from "./Section";
import styles from "../styles/Contact.module.css";
import ContactForm from "./ContactForm";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const Contact = forwardRef<HTMLElement>(function Contact(_, ref) {
  useRevealOnScroll();

  const email = "duchemin.alexandre0670@gmail.com";
  const github = "https://github.com/Alexandre27-byte-oss";
  const linkedin = "https://www.linkedin.com/in/alexandre-duchemin-pro/";

  return (
    <Section id="contact" title="Contact" subtitle="Email et liens." ref={ref}>
      <div className={styles.grid}>
        <div className={styles.card} data-reveal>
          <h3 className={styles.cardTitle}>Me joindre</h3>
          <ul className={styles.links}>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <p className={styles.hint}></p>
        </div>

        <div className={styles.card} data-reveal>
          <h3 className={styles.cardTitle}>Formulaire</h3>
          <ContactForm toEmail={email} />
        </div>
      </div>
    </Section>
  );
});

export default Contact;
