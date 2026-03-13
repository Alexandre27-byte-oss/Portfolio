import { forwardRef } from "react";
import Section from "./Section";
import styles from "../styles/Skills.module.css";
import { skills } from "../data/skills";
import SkillTags from "./SkillTags";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const Skills = forwardRef<HTMLElement>(function Skills(_, ref) {
  useRevealOnScroll();

  return (
    <Section
      id="skills"
      title="Compétences"
      subtitle="Organisées par catégories."
      ref={ref}
    >
      <div className={styles.grid}>
        {Object.entries(skills).map(([cat, list]) => (
          <div className={styles.card} key={cat} data-reveal>
            <h3 className={styles.cardTitle}>{cat}</h3>
            <SkillTags items={list} />
          </div>
        ))}
      </div>
    </Section>
  );
});

export default Skills;
