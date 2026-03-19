export type Project = {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  context?: string;
  objectives?: string[];
  role?: string[];
  features?: string[];
  skills?: string[];
};

export const projects: Project[] = [
  {
    title: "Dashboard Notes de Frais",
    description: "SPA orientée productivité avec filtres, états, export et UX simple. Conçue pour être maintenable et rapide.",
    stack: ["React", "TypeScript", "Vite"],
    tags: ["React", "TypeScript", "UI", "Accessibilité"],
    githubUrl: "https://github.com/username/expense-dashboard",
    liveUrl: "https://username.github.io/expense-dashboard/",
    image: "",
    context: "Projet BTS SIO option SLAM - Gestion notes de frais pour PME.",
    objectives: [
      "CRUD sécurisé avec authentification JWT",
      "Filtres avancés + export PDF/Excel",
      "Responsive + PWA"
    ],
    role: [
      "dev front-end",
      "Déploiement Vercel"
    ],
    features: [
      "Recherche full-text",
      "Statuts automatisés",
      "Dark mode"
    ],
    skills: ["React Hooks", "TypeScript", "Vite", "CSS Modules", "Accessibility (WCAG)"]
  },
  {
    title: "App Tickets Support",
    description: "Interface front claire avec gestion de tickets, recherche et statuts. Priorité au design system minimal.",
    stack: ["React", "CSS Modules"],
    tags: ["Front", "UX", "Composants"],
    githubUrl: "https://github.com/username/support-tickets",
    liveUrl: "",
    context: "Exercice technique React - Simulation outil support client.",
    objectives: [
      "Gestion CRUD tickets",
      "Notifications",
      "Design réutilisable"
    ],
    role: ["Développeur fullstack front"],
    features: [
      "Drag & drop priorités",
      "Filtres dynamiques",
      "Thème switch"
    ],
    skills: ["React", "CSS", "Composent Library"]
  },
  {
    title: "Landing Page Produit",
    description: "Landing performante, accessible, SEO de base, animations discrètes et responsive soigné.",
    stack: ["React", "Vite"],
    tags: ["SEO", "Performance", "Responsive"],
    githubUrl: "https://github.com/username/clean-landing",
    liveUrl: "https://clean-landing.example.com",
    image: "/projects/landing-preview.jpg",
    context: "Landing commerciale pour SaaS - Objectif conversion.",
    objectives: [
      
      "SEO on-page optimisé",
      "Animations GSAP fluides"
    ],
    role: ["Dev front + motion design"],
    features: [
      "Scroll-triggered animations",
      "Formulaire intégré",
      "PWA ready"
    ],
    skills: ["React", "TypeScript",  "techniques SEO"]
  }
];
