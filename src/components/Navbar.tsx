import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

type Item = { id: string; label: string };

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({
  items,
  activeId,
  onToggleTheme,
  theme,
  setTheme,
}: {
  items: Item[];
  activeId: string;
  onToggleTheme: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
}) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <a className={styles.brand} href="#hero" onClick={(e) => { e.preventDefault(); scrollToId("hero"); }}>
          Duchemin Alexandre
        </a>

        <ul className={styles.links}>
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={activeId === it.id ? styles.active : undefined}
                aria-current={activeId === it.id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(it.id);
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}
