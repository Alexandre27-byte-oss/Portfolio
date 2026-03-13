import { forwardRef, useMemo, useState } from "react";
import Section from "./Section";
import styles from "../styles/Projects.module.css";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

function uniqueSorted(arr: string[]) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b));
}

const Projects = forwardRef<HTMLElement>(function Projects(_, ref) {
  useRevealOnScroll();

  const allTech = useMemo(() => {
    const list = projects.flatMap((p) => [...p.stack, ...p.tags]);
    return uniqueSorted(list);
  }, []);

  const [filter, setFilter] = useState<string>("Tous");

  const filtered = useMemo(() => {
    if (filter === "Tous") return projects;
    return projects.filter((p) => p.stack.includes(filter) || p.tags.includes(filter));
  }, [filter]);

  return (
    <Section
      id="projects"
      title="Projets"
      subtitle="Cartes lisibles, stack claire, liens rapides."
      ref={ref}
    >
      <div className={styles.toolbar} data-reveal>
        <div className={styles.filters} role="group" aria-label="Filtrer par techno">
          <button
            type="button"
            className={filter === "Tous" ? styles.filterActive : styles.filter}
            onClick={() => setFilter("Tous")}
          >
            Tous
          </button>
          {allTech.slice(0, 10).map((t) => (
            <button
              key={t}
              type="button"
              className={filter === t ? styles.filterActive : styles.filter}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <p className={styles.count} aria-live="polite">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
});

export default Projects;
