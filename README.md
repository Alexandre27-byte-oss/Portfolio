# Portfolio (React + Vite + TypeScript)

Portfolio SPA minimaliste, responsive, accessible, avec thème Light/Dark (localStorage + prefers-color-scheme), navigation sticky, ancres et sections actives via IntersectionObserver.

## Démarrer

```bash
npm install
npm run dev
```

Build / preview :

```bash
npm run build
npm run preview
```

## Personnalisation rapide

- Texte / sections : `src/components/*`
- Projets : `src/data/projects.ts`
- Compétences : `src/data/skills.ts`
- Veille : `src/data/techWatch.ts`
- Photo : placer une image à `public/profile.jpg`
  - Fallback auto si l’image est absente.

## Déploiement GitHub Pages

1) Crée un repo GitHub (ex: `portfolio`)
2) Dans `vite.config.ts`, mets :

```ts
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
});
```

3) Build et déploie avec GitHub Actions (recommandé) ou manuellement.

### Option A — GitHub Actions (recommandé)
- Active Pages: Settings → Pages → Source: GitHub Actions
- Ajoute un workflow `.github/workflows/deploy.yml` (exemple minimal) :

```yml
name: Deploy
on:
  push:
    branches: [ "main" ]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### Option B — Déploiement manuel
- Build: `npm run build`
- Publie le dossier `dist/` via Pages (selon ton approche).

## Notes accessibilité / UX
- Lien “Aller au contenu”
- Labels explicites
- Contrastes et focus visibles
- Animations discrètes, désactivées via `prefers-reduced-motion`
