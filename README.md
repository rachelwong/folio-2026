## Rebuild of Personal Folio 2019 to latest version

This is a lift-and-shift update of [folio21](https://github.com/rachelwong/folio-2026) to update foundation dependencies:
- NextJS v11 to v16
- React v17 to v19
- Node deployment to v24

A new repo is created to facilitate the breaking change jump and regression testing. The project retains the Pages Router and styled components, but legacy dependencies below have been removed:
- url loader
- file loader
- next-sass
- babel 

Accessible on [https://rachelwong.dev/](https://rachelwong.dev/)

## Potential Improvements

The following are areas that could be improved or refactored:

- **Testing Framework** — No test script or test framework is currently configured. Adding Jest/Vitest + React Testing Library could help catch regressions and build confidence in updates.
- **TypeScript Configuration** — TypeScript is configured but the codebase is entirely JavaScript (`.js`). Either incrementally adopt TypeScript or remove the unused configuration.
- **Unused styled-components** — `styled-components` is enabled in `next.config.ts` but not used anywhere (SCSS Modules is the actual styling method). Can be removed if confirmed dead.
- **Centralized SEO / Head Tags** — Every content page duplicates `<Head>` meta tags. Could be extracted into a reusable `SEO` component or custom `Head` wrapper.
- **Shared Contentful Client** — Each page independently instantiates a Contentful client in `getStaticProps`. Could be extracted into a single shared module (e.g. `lib/contentful.js`).
- **Missing `.env.example`** — A `.env.example` with placeholder values would help future contributors understand what environment variables are needed.

Above recommendations are from Claude Code.