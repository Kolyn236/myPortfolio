# Nikolay Dychkov — Portfolio

Source code for Nikolay Dychkov's personal engineering portfolio.

The site presents backend, AI/LLM, payments and blockchain experience in a compact recruiter-friendly format. Content is kept separately from UI components so the portfolio can be updated without rewriting the application structure.

## Stack

- React 18
- TypeScript 5
- Vite 5
- CSS Modules + global CSS

## Local development

```bash
npm install
npm run dev
```

The Vite development server is available at `http://localhost:5173` by default.

## Production build

```bash
npm run build
npm run preview
```

Production output is generated in `dist/`.

## Project structure

```text
src/
  data/
    content.ts       # contact configuration and locale entrypoint
    content.en.ts    # English portfolio content
    content.ru.ts    # Russian portfolio content
  components/        # UI sections and reusable components
  styles/global.css  # global theme and utilities
  App.tsx            # application layout
```

## Content model

Contact links and localized portfolio copy live under `src/data/`. The application supports English and Russian content while keeping presentation components independent from the text.

## Purpose

This repository is intentionally small: it is the presentation layer for the portfolio rather than a showcase of backend architecture. Deeper backend, distributed-systems, AI and blockchain work is available in the dedicated project repositories linked from the portfolio.
