# SmarTap website

Responsive SmarTap product website, built with React and Vite. The Starter example card is at `/demo/index.html`, and the fictional coffee shop Business showcase is at `/demo/business.html`.

The homepage is editable in `src/App.jsx` and `src/site.css`. The Starter and Business demos are React pages in `src/StarterDemo.jsx` and `src/BusinessDemo.jsx`, with styles in `src/starter.css` and `src/business.css`. Their small HTML entry files are in `demo/`. The Business demo adds a fictional coffee shop showcase, with generated photographs in `public/coffee-hero.png` and `public/coffee-table.png`. The editorial layout is documented in `DESIGN_AUDIT.md`, and its generated homepage photo assets are `public/hero-editorial.png` and `public/card-editorial.png`.

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

The transparent wordmark in `public/smartap-logo.svg` uses the supplied vector artwork. The small `public/smartap-mark.svg` icon is a separate asset.

The homepage footer contains Lloyd's SmarTap contact details and quick actions. Package demo links remain in the Packages section.

The social buttons currently link to generic Facebook, Instagram, and TikTok homepages. Replace them with profile URLs before using the example as a live contact card.
