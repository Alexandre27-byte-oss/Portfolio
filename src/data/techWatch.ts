export type WatchSource = { name: string; url: string };
export type TechWatchData = {
  topic: string;
  note: string;
  sources: WatchSource[];
};

export const techWatch = {
  topic: "Veille informatique : IA, cybersécurité et technologies du jeu vidéo",
  note:
    "Je réalise une veille sur les évolutions récentes de l’informatique à travers plusieurs thèmes : l’intelligence artificielle, la cybersécurité, les frameworks et les technologies du jeu vidéo. Cette veille me permet de suivre des innovations concrètes, de comprendre les nouvelles menaces de sécurité et d’observer l’évolution des outils utilisés par les développeurs.",
  sources: [
    {
      name: "Microsoft Security Blog — AI as tradecraft: How threat actors operationalize AI (6 mars 2026)",
      url: "https://www.microsoft.com/en-us/security/blog/2026/03/06/ai-as-tradecraft-how-threat-actors-operationalize-ai/"
    },
    {
      name: "CISA — CISA Adds One Known Exploited Vulnerability to Catalog (18 mars 2026)",
      url: "https://www.cisa.gov/news-events/alerts/2026/03/18/cisa-adds-one-known-exploited-vulnerability-catalog-0"
    },
    {
      name: "Google Developers Blog — What’s new in TensorFlow 2.21 (6 mars 2026)",
      url: "https://developers.googleblog.com/whats-new-in-tensorflow-221/"
    },
    {
      name: "Unity — 2026 Unity Game Development Report: How studios are evolving (9 mars 2026)",
      url: "https://unity.com/blog/2026-unity-game-development-report-trends"
    },
    {
      name: "PlayStation Blog — Upgraded PSSR upscaler is coming to PS5 Pro (27 février 2026)",
      url: "https://blog.playstation.com/2026/02/27/upgraded-pssr-upscaler-is-coming-to-ps5-pro/"
    }
  ]
};