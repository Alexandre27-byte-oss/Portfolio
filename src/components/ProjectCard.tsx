import styles from "../styles/ProjectCard.module.css";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, stack, tags, githubUrl, liveUrl, image } = project;

  return (
    <article className={styles.card} data-reveal aria-label={`Projet ${title}`}>
      {image ? (
        <div className={styles.imageWrap}>
          <img className={styles.image} src={image} alt={`Capture du projet ${title}`} loading="lazy" />
        </div>
      ) : null}

      <div className={styles.body}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
        </header>

        <div className={styles.meta}>
          <div>
            <p className={styles.label}>Stack</p>
            <ul className={styles.badges} aria-label="Stack">
              {stack.map((s) => (
                <li key={s} className={styles.badge}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.label}>Tags</p>
            <ul className={styles.badges} aria-label="Tags">
              {tags.map((t) => (
                <li key={t} className={styles.badgeSoft}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          {githubUrl ? (
            <a className="btn btnGhost" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span className={styles.disabled} aria-disabled="true">GitHub — à venir</span>
          )}

          {liveUrl ? (
            <a className="btn" href={liveUrl} target="_blank" rel="noreferrer">
              Live
            </a>
          ) : (
            <span className={styles.disabled} aria-disabled="true">Live — à venir</span>
          )}
        </div>
      </div>
    </article>
  );
}
