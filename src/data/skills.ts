export type SkillCategory = "Front" | "Back" | "DB" | "Outils";

export type SkillsData = Record<SkillCategory, string[]>;

export const skills: SkillsData = {
  Front: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  Back: ["Node.js", "Python", "Flask"],
  DB: ["MySQL"],
  Outils: ["GitHub", "Figma", "VS Code"]
};
