# CLAUDE.md — folio-2026 Portfolio Site

## Project Overview

This is a personal portfolio website (rachelwong.dev), rebuilt from an earlier version to upgrade core dependencies. It's a **Next.js 16** application using the **Pages Router** (not App Router), built with **React 19**, and sources content from the **Contentful CMS** via `getStaticProps`/`getStaticPaths` (with ISR enabled, `revalidate: 1`).

The site showcases the developer's work, including featured projects (with tech-stack tags and links), practice "shots", blog posts with rich text and embedded code samples, and an illustration gallery.

## Tech Stack

- **Routing & Framework**: Next.js 16 (Pages Router), React 19
- **Content Management**: Contentful CMS + `@contentful/rich-text-react-renderer`
- **Styling**: SCSS Modules (`*.module.scss`), plus `styled-components` (enabled in compiler but not actively used), Bootstrap 5 grid via `react-bootstrap`
- **Animations**: Framer Motion (staggered text reveals, fade-ins)
- **Media & Interactive**:
  - `react-slick` + `slick-carousel` (project/banner carousels)
  - `react-photoswipe-gallery` (illustration gallery lightbox)
  - `use-sound` (Piano component audio)
- **Code Display**: `react-syntax-highlighter` (Prism/docco theme for blog code blocks)
- **Utilities**: `next/image` (optimized images), `next/head` (SEO meta tags)
- **Dev Tools**: TypeScript (configured but not used in application code), ESLint, Sass compiler

## Project Structure

```
pages/              Next.js Pages Router routes (no src/ directory)
  _app.js           Global layout (Navbar + Footer + page transitions)
  index.js          Homepage (hero, projects, shots, about)
  blog.js           Blog index/listing
  blog/[slug].js    Dynamic blog post (rich text, code highlighting)
  illustration.js   Illustration gallery (Contentful-sourced)
  404.js            Custom 404 page

components/         Reusable React components
  Navbar.js
  Footer.js
  Header.js
  Carousel.js       Shape carousel (homepage)
  MiniCarousel.js   Featured projects carousel
  Piano.js          Interactive piano (audio notes)
  Shot.js           Practice project card
  PostEntry.js      Blog post preview
  HamburgerMenu/    Mobile menu (subfolder)

styles/             SCSS modules (one per page/component + shared utilities)
  globals.scss      Global styles (CSS custom properties, fonts, resets)
  mixins.scss       Breakpoint/responsive design mixins
  *.module.scss     Component-scoped styles (BEM-like naming)

public/             Static assets
  *.svg             Tech-stack logo SVGs, decorative assets
  *.png             Project screenshots (Linkedout, Preloved)
  RachelWong_CV.pdf Download link
  notes/*.mp3       Piano note sounds
  manifest.json     PWA metadata
```

## Scripts & Commands

- `npm run dev` – Start Next.js dev server (localhost:3000)
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

**Note**: No test script exists; no testing framework is configured.

## Code Conventions

### Language & File Types
- Application code is **plain JavaScript** (`.js` files), not TypeScript, despite `tsconfig.json` and `@types/*` being present in devDependencies. TypeScript is configured but not actively adopted in the codebase.
- Configuration files (`next.config.ts`) use TypeScript.

### Styling Approach
- **SCSS Modules** (`*.module.scss`) are the primary styling method, with one file per component/page.
- Class access uses bracket notation for kebab-case names: `styles['component-name__element']`
- BEM-like naming convention is followed throughout.
- `styles/mixins.scss` provides a `respond()` breakpoint mixin for responsive design.
- Bootstrap grid (`Container`, `Row`, `Col` from `react-bootstrap`) is used for layout (projects section).
- `styled-components` is enabled in `next.config.ts` but **not observed in actual use** — may be legacy.

### Component Patterns
- Functional components with React hooks (`useState`, `useRouter`).
- Default exports throughout.
- No PropTypes or TypeScript prop typing.
- Framer Motion used consistently for entrance animations (`motion.div`, `initial`/`animate`/`variants`).
- `next/image` used for all images (explicit width/height).

### Data Fetching
Each content page (`index.js`, `blog.js`, `blog/[slug].js`, `illustration.js`) defines its own `getStaticProps` function that:
- Instantiates a fresh Contentful client using `NEXT_CONTENTFUL_SPACE_ID` and `NEXT_CONTENTFUL_CDN_API` from `.env` (gitignored)
- Queries Contentful for content (posts, illustrations, shots)
- Returns `props` and `revalidate: 1` for ISR

Dynamic pages like `blog/[slug].js` also define `getStaticPaths` to pre-render all blog posts.

### Environment Setup
- `.env` file (gitignored) must contain:
  ```
  NEXT_CONTENTFUL_SPACE_ID=<your-space-id>
  NEXT_CONTENTFUL_CDN_API=<your-preview-or-delivery-api-key>
  ```
- No `.env.example` is committed.

## Deployment

Deployed via **Vercel's Git integration** — pushes to the `master` branch auto-deploy. No `vercel.json` is committed (implicit Vercel deployment config).

## Git Conventions

- **Branch**: `master` is the main/default branch.
- **Commit messages**: Conventional Commits style with prefixes: `fix:`, `docs:`, `style:`, `chore:`.
- **Example**: `fix: removed react-icons`, `docs: update readme`.

