# yaren-webapp

Professional portfolio for **Yaren Kılıç** — a single-page site built with **Vite + React + Tailwind CSS**, focused on documenting a **coding and software-engineering learning path**.

**Edit all copy and links** in [`src/site/personal.js`](src/site/personal.js).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Architecture

- `src/sections/`: page sections (Hero, About, Projects, Contact, Footer)
- `src/features/`: interactive features (example: `contactForm`)
- `src/shared/`: reusable UI and helpers
  - `shared/ui/`: UI building blocks (Button, Container, SectionTitle)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
