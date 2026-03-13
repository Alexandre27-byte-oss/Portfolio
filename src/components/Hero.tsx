import { forwardRef, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Section from "./Section";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  useRevealOnScroll();

  // Ensure hero is revealed quickly on load (still respects reduced motion)
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.dataset.reveal === "hidden") el.dataset.reveal = "shown";
    });
  }, []);

  return (
    <Section
      id="hero"
      title="Duchemin Alexandre"
      subtitle="Etudiant en BTS SIO"
      ref={ref}
    >
      <div className={styles.hero} data-reveal>
        <p className={styles.lead}>
          Je conçois des projets orienté métier 
        </p>

        <div className={styles.ctaRow}>
          <button className="btn" onClick={() => scrollTo("projects")}>
            Voir mes projets
          </button>
          <button className="btn btnGhost" onClick={() => scrollTo("contact")}>
            Me contacter
          </button>
        </div>

        <dl className={styles.meta} aria-label="Résumé">
          <div>
            <dt>Spécialité</dt>
            <dd>Python , React, Javascript, Power Apps</dd>
          </div>
          <div>
            <dt>Apprentisage</dt>
            <dd>Alternance / Stage (SNCF)</dd>
          </div>
          <div>
            <dt>Localisation</dt>
            <dd>Sotteville, FR </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
});

export default Hero;
