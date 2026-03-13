import styles from "../styles/ThemeToggle.module.css";
import type { Theme } from "../hooks/useTheme";

export default function ThemeToggle({
  theme,
  onToggle,
  setTheme
}: {
  theme: Theme;
  onToggle: () => void;
  setTheme: (t: Theme) => void;
}) {
  return (
    <div className={styles.wrap} role="group" aria-label="Thème">
      <button
        type="button"
        className={styles.button}
        onClick={onToggle}
        aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
        title={theme === "dark" ? "Thème clair" : "Thème sombre"}
      >
        <span className={styles.icon} aria-hidden="true">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
        <span className={styles.label}>{theme === "dark" ? "Dark" : "Light"}</span>
      </button>

      <div className={styles.srOnlyChoice}>
        <label>
          <span className="srOnly">Choisir le thème</span>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
            aria-label="Choisir le thème"
          >
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
          </select>
        </label>
      </div>
    </div>
  );
}
