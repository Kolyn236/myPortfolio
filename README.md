# Nikolay Dychkov — Personal Landing Page

Backend-heavy Full Stack / AI Engineer portfolio landing page.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Edit your info

**Contact links** — replace placeholders in `src/data/content.ts` under the `contact` object:

- `contact.email` — your email (without `mailto:`)
- `contact.github` — full GitHub URL
- `contact.linkedin` — full LinkedIn URL
- `contact.cvEn` / `contact.cvRu` — full URLs to your CV (English / Russian)

Links stay disabled until placeholders are replaced (no broken `mailto:[PUT_EMAIL_HERE]`).

**All other copy** — same file, below the contact block.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Project structure

```
src/
  data/content.ts       # All text and links (edit here)
  components/           # Section components
  styles/global.css     # Global theme and utilities
  App.tsx               # Page layout
```

## Stack

- React 18 + TypeScript
- Vite 5
- CSS Modules + global CSS (no Tailwind)
