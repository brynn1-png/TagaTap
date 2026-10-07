# SmarTap redesign audit

## What the reference shows

The supplied image is a visual montage of successive sections of a photography portfolio. Its source code and framework are not available, so the structure below is inferred from the visible design rather than identified from implementation files.

1. **Framed hero:** a full-width editorial photograph inside a light border, with a compact dark pill navigation layered near the top. The brand, short description, and small call to action sit over the image.
2. **Editorial introduction:** a small section label, a large centered statement mixing sans and italic serif type, then a two-column image and body-copy composition.
3. **Proof and work:** restrained metadata and a staggered set of image tiles. The reference uses project counts and client logos; those claims do not belong to SmarTap.
4. **Dark services band:** a black section with a supporting visual on the left and a list of services divided by fine horizontal rules on the right.
5. **Modular example grid:** photography, small factual tiles, and a portfolio preview arranged at different sizes.
6. **FAQ and close:** compact accordion rows on a light surface, followed by a black closing section with a large typographic brand treatment.

## Design rules carried into SmarTap

- One scrolling page. The three columns in the supplied montage are treated as consecutive portions of that page, not as a three-column website layout.
- Pale grey and sage surfaces, dark ink sections, thin dividing rules, restrained corner rounding, and the existing lime SmarTap accent.
- Inter for readable UI text; Georgia italic for editorial emphasis; the supplied SmarTap SVG for the brand lettering.
- Two project-owned editorial photos support the hero and product explanation. They were generated for this redesign and contain no invented product UI or claims.
- The photography portfolio's content is replaced by SmarTap's established product facts: browser-based profile, save contact, direct contact links, location, and the existing Lloyd example card.

## Implemented page order

Hero → About SmarTap → How it works → Profile capabilities → Lloyd's example card → FAQ → Closing invitation.

The example card retains working save-contact, call, text, email, location, and full-card links. The standalone demo at `/demo/index.html` was restyled to use the new editorial language while preserving those actions.

## Verification

`npm run build` passes. Chrome captured the rendered desktop and mobile pages after the user authorized local command-line visual QA. The screenshots are in `design-review/`; findings and remaining limits are recorded in `design-qa.md`.
