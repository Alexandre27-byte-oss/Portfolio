import { forwardRef, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Section from "./Section";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Hero = forwardRef<HTMLElement>(function Hero(_, ref) {
  useRevealOnScroll();

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.dataset.reveal === "hidden") el.dataset.reveal = "shown";
    });
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <Section id="hero" title="Présentation" ref={ref}>
        <div className={styles.subtitleFrame}>
          <p>
            Ce portfolio présente les projets que j'ai réalisés dans le cadre de
            ma formation en BTS SIO SLAM. Il met en avant mes compétences en
            développement d'applications, en gestion de bases de données, en
            création d'interfaces et en réponse à des besoins utilisateurs
            concrets.
          </p>
        </div>
      </Section>
    </div>
  );
});

export default Hero;
