import { useMemo } from "react";
import styles from "./styles/App.module.css";
import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TechWatch from "./components/TechWatch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["hero", "about", "skills", "projects", "watch", "contact"] as const;

export default function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const { activeId, registerSectionRef } = useActiveSection(SECTION_IDS);

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Accueil" },
      { id: "about", label: "À propos" },
      { id: "skills", label: "Compétences" },
      { id: "projects", label: "Projets" },
      { id: "watch", label: "Veille" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className={styles.page} data-theme={theme}>
      <a className="skipLink" href="#main">
        Aller au contenu
      </a>

      <Navbar
        items={navItems}
        activeId={activeId}
        onToggleTheme={toggleTheme}
        theme={theme}
        setTheme={setTheme}
      />

      <main id="main" className={styles.main}>
        <Hero ref={registerSectionRef("hero")} />
        <About ref={registerSectionRef("about")} />
        <Skills ref={registerSectionRef("skills")} />
        <Projects ref={registerSectionRef("projects")} />
        <TechWatch ref={registerSectionRef("watch")} />
        <Contact ref={registerSectionRef("contact")} />
      </main>

      <Footer />
    </div>
  );
}
