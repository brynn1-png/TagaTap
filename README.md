# SmarTap website

Responsive SmarTap product website, built with React and Vite. The Starter example card is at `/demo/index.html`, and the fictional coffee shop Business showcase is at `/demo/business.html`.

The homepage is editable in `src/App.jsx` and `src/site.css`. The Starter card is in `public/demo/index.html`. The Business demo keeps the Starter contact actions and adds a fictional coffee shop showcase in `public/demo/business.html` and `public/demo/business.css`, with generated coffee photographs in `public/coffee-hero.png` and `public/coffee-table.png`. The editorial layout is documented in `DESIGN_AUDIT.md`, and its generated homepage photo assets are `public/hero-editorial.png` and `public/card-editorial.png`.

## Run

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`. The Starter card is at `http://127.0.0.1:5173/demo/index.html`; the Business coffee shop demo is at `http://127.0.0.1:5173/demo/business.html`.

## Production build

```sh
npm run build
npm run preview
```

The deployable files are generated in `dist/`. The original compiled reference bundle remains in `public/reference-assets/` for archival purposes and is not used by the redesigned card.

The transparent vector logo assets are `public/smartap-logo.svg` and `public/smartap-mark.svg`. They were recreated from the supplied image.

The social buttons currently link to generic Facebook, Instagram, and TikTok homepages. Replace them with profile URLs before using the example as a live contact card.
