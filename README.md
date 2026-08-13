## Rebuild of Personal Folio 2019 to latest version

This is a lift-and-shift update of [folio21](https://github.com/rachelwong/folio-2026) to update foundation dependencies:
- NextJS v11 to v16
- React v17 to v19
- Node deployment to v24

A new repo is created to facilitate the breaking change jump and regression testing. The project retains the App Router, styled components but legacy dependencies below have been removed:
- url loader
- file loader
- next-sass
- babel 

Accessible on [https://rachelwong.dev/](https://rachelwong.dev/)

