# Mimisha Mittal — Portfolio

This repository contains a Vite + React + TypeScript portfolio for Mimisha Mittal (AI & Enterprise SaaS Product Manager).

Local development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Build for GitHub Pages

```bash
npm run build
```

This writes the production site into the `docs/` folder so GitHub Pages can serve it from the `main` branch -> `docs` folder. After building, commit `docs/` and push to GitHub.

Deploy notes

- Option A: GitHub Pages (use `main` branch and set Pages source to `docs/`)
- Option B: Run `gh-pages` package or GitHub Actions to publish to `gh-pages` branch.
