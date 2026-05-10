# Ada & Tobi · Wedding Site

A one-page React + styled-components wedding site, built to deploy on Netlify.

## Quickstart

```bash
yarn install
yarn start          # dev at http://localhost:3000
yarn build          # production bundle in ./build
```

## Structure

- `src/pages/app.tsx` — composes the one-pager
- `src/components/Hero.tsx` — opening view (couple's names + tagline)
- `src/components/PhotoBlock.tsx` — Kodak-style photo frame that twirls into focus on scroll
- `src/components/Invitation.tsx` — invite card with traditional + white wedding details
- `src/components/Rsvp.tsx` — RSVP form (name, email, plus-one)
- `src/components/Asoebi.tsx` — Flutterwave link to buy aso-ebi material
- `src/styles/theme.ts` — earthy / cream palette and font stack

## TODOs to personalize

- Couple names (`Ada & Tobi`) — `Hero`, `Invitation`, `Footer`, `public/index.html`, `public/manifest.json`
- Event dates and venues — `src/components/Invitation.tsx`
- Photos — drop images into `public/images/` and swap the placeholder `<Photo>` in `PhotoBlock.tsx`
- Flutterwave link — `FLUTTERWAVE_URL` in `src/components/Asoebi.tsx`
- RSVP submission — wire `onSubmit` in `src/components/Rsvp.tsx` to Netlify Forms / Formspree / your API

## Deploy

`netlify.toml` is already configured. Push to a connected repo; Netlify runs `yarn build` and publishes `./build`.
