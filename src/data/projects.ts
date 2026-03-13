export type Project = {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string; // e.g. "/projects/projet1.jpg"
};

export const projects: Project[] = [
  {
    title: "Dashboard Notes de Frais",
    description:
      "SPA orientée productivité avec filtres, états, export et UX simple. Conçue pour être maintenable et rapide.",
    stack: ["React", "TypeScript", "Vite"],
    tags: ["React", "TypeScript", "UI", "Accessibilité"],
    githubUrl: "https://github.com/username/expense-dashboard",
    liveUrl: "https://username.github.io/expense-dashboard/",
    image: ""
  },
  {
    title: "App Tickets Support",
    description:
      "Interface front claire avec gestion de tickets, recherche et statuts. Priorité au design system minimal.",
    stack: ["React", "CSS Modules"],
    tags: ["Front", "UX", "Composants"],
    githubUrl: "https://github.com/username/support-tickets",
    liveUrl: ""
  },
  {
    title: "Landing Page Produit",
    description:
      "Landing performante, accessible, SEO de base, animations discrètes et responsive soigné.",
    stack: ["React", "Vite", "TypeScript"],
    tags: ["SEO", "Performance", "Responsive"],
    githubUrl: "https://github.com/username/clean-landing",
    liveUrl: "https://clean-landing.example.com"
  }
];
