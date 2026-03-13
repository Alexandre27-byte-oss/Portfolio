import { forwardRef, useMemo, useEffect } from "react";
import styles from "../styles/About.module.css";
import Section from "./Section";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const About = forwardRef<HTMLElement>(function About(_, ref) {
  useRevealOnScroll();

  const fallbackSvg = useMemo(() => {
    const svg = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#cbd5e1"/>
            <stop offset="1" stop-color="#e2e8f0"/>
          </linearGradient>
        </defs>
        <rect width="240" height="240" rx="120" fill="url(#g)"/>
        <text x="50%" y="52%" font-size="20" text-anchor="middle" fill="#334155" font-family="system-ui, -apple-system, Segoe UI, Roboto">
          Photo
        </text>
      </svg>
    `);
    return `data:image/svg+xml;charset=utf-8,${svg}`;
  }, []);

  useEffect(() => {
    const img = document.getElementById(
      "profile-img",
    ) as HTMLImageElement | null;
    if (!img) return;

    img.onerror = () => {
      img.src = fallbackSvg;
    };
  }, [fallbackSvg]);

  return (
    <Section
      id="about"
      title="À propos"
      subtitle="Une courte présentation de ce que je fais en entreprise."
      ref={ref}
    >
      <div className={styles.grid}>
        <div className={styles.avatarWrap} data-reveal>
          <img
            id="profile-img"
            className={styles.avatar}
            src={"/profile.jpg"}
            alt="Photo de profil de Nom Prénom"
            loading="lazy"
          />
        </div>

        <div className={styles.text} data-reveal>
          <p>
            Alternant en BTS SIO Option SLAM.
            J’aime transformer des besoins flous en parcours simples.
          </p>

          <ul className={styles.facts} aria-label="Quelques infos">
            <li>
              <span>Apprentissage</span>
              <strong>Alternance à la SNCF</strong>
            </li>
            <li>
              <span>Focus</span>
              <strong>Power Apps</strong>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
});

export default About;
