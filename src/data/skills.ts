export type SkillCategory = "Front" | "Back" | "DB" | "Outils";

export type SkillsData = Record<SkillCategory, string[]>;

export const skills: SkillsData = {
  Front: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Accessibilité (a11y)", "Vite"],
  Back: ["Node.js", "Express", "Python", "Flask", "REST"],
  DB: ["MySQL", "PostgreSQL", "SQLite", "Modélisation"],
  Outils: ["Git", "GitHub", "CI/CD", "Figma (handoff)", "Tests (placeholder)"]
};
