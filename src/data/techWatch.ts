export type WatchSource = { name: string; url: string };
export type TechWatchData = {
  topic: string;
  note: string;
  sources: WatchSource[];
};

export const techWatch: TechWatchData = {
  topic: "Accessibilité et performance front — tendances 2026",
  note:
    "Je suis les évolutions autour des Core Web Vitals, de l’accessibilité (WCAG), et des patterns UI qui restent simples mais robustes. Objectif : livrer vite, sans dette UX.",
  sources: [
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
    { name: "web.dev", url: "https://web.dev/" },
    { name: "React Blog", url: "https://react.dev/blog" },
    { name: "W3C (WCAG)", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }
  ]
};
