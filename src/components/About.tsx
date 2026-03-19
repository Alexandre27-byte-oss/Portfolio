import { forwardRef } from "react";
import styles from "../styles/About.module.css";
import Section from "./Section";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const About = forwardRef<HTMLElement>(function About(_, ref) {
  useRevealOnScroll();

  return (
    <Section id="about" title="" subtitle="" ref={ref}>
      <div className={styles.heroContainer} data-reveal>
        <div className={styles.headerBlock}>
          <div className={styles.avatarHero}>
            <img
              src="/public/Photo-Portfolio.jpeg"
             
              className={styles.avatarHeroImg}
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.lead}>Duchemin Alexandre</h1>
            <p className={styles.subtitle}>Étudiant en BTS SIO option SLAM</p>
          </div>
        </div>
        <div className={styles.presentation}>
          <p>
            Étudiant en BTS SIO option SLAM spécialisé dans le développement
            d'applications répondant à des besoins utilisateurs. J'ai réalisé
            plusieurs projets en lien avec la gestion de données, le
            développement d'interfaces et les applications web, en utilisant
            principalement Python, HTML/CSS et des bases de données MySQL.
          </p>
        </div>
        <div className={styles.ctaRow}>
          <button className="btn" onClick={() => scrollTo("projects")}>
            Voir mes projets
          </button>
          <button className="btn btnGhost" onClick={() => scrollTo("contact")}>
            Me contacter
          </button>
        </div>
      </div>
    </Section>
  );
});

export default About;
