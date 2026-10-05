# TagaTap website

Mobile-first TagaTap product website, built with React and Vite. The original [TagaTap reference page](https://update-string-23358712.figma.site/) is available as a live card demo.

The homepage is editable in `src/App.jsx` and `src/site.css`. The live card uses the reference site's compiled interface and styling to preserve its layout, text, animations, and actions. Its hero image and Inter font files are hosted locally. The Figma Make editor badge is omitted.

## Run

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:5173/`. The live card is at `http://127.0.0.1:5173/demo/index.html`.

## Production build

```sh
npm run build
npm run preview
```

The deployable files are generated in `dist/`. The demo's original bundle lives in `public/reference-assets/`, which Vite copies into the build.

The SVG logo assets are `public/tagatap-mark.svg` and `public/tagatap-logo.svg`.

The social buttons retain the reference page's generic Facebook, Instagram, and TikTok destinations. Replace those links with profile URLs before using this as a live contact card.
