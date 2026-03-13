import styles from "../styles/SkillTags.module.css";

export default function SkillTags({ items }: { items: string[] }) {
  return (
    <ul className={styles.tags} aria-label="Compétences">
      {items.map((s) => (
        <li key={s} className={styles.tag}>
          {s}
        </li>
      ))}
    </ul>
  );
}
