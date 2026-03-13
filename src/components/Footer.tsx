import styles from "../styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {year} Duchemin Alexandre</p>
        <ul className={styles.links} aria-label="Liens pied de page">
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#hero">Haut de page</a></li>
        </ul>
      </div>
    </footer>
  );
}
