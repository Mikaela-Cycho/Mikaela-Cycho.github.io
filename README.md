# Personal site — Yujia (Mikaela) Duan

Static single-page portfolio. No framework, no server. The only build step is
compiling Tailwind CSS.

## Running it locally

```bash
npm install          # once
npm run dev          # rebuilds dist/styles.css whenever you edit classes
npm run serve        # serves the folder at http://localhost:3000
```

**When do I need to rebuild?** Only when CSS changes — that means editing
`src/input.css`, `src/fonts.css`, `tailwind.config.js`, or adding a Tailwind
class to `index.html` that wasn't already used somewhere. Editing text in
`i18n.js` or swapping an image needs no build at all; just refresh.

Leave `npm run dev` running while you work and it rebuilds on every save.

## Before deploying

```bash
npm run build        # writes the minified dist/styles.css
```

`dist/styles.css` is a real file, so commit it. That way hosting is just
"upload the folder" — no build step needed on the server.

## Files

| File                 | What it is                                                     |
| -------------------- | -------------------------------------------------------------- |
| `index.html`         | The whole page: markup and script                              |
| `i18n.js`            | **All English + Chinese copy**, and the Art Room image list     |
| `src/input.css`      | Tailwind entry point + base styles + reusable component classes |
| `src/fonts.css`      | The `@font-face` rules for the self-hosted fonts                |
| `tailwind.config.js` | The color/type/spacing theme from the original Stitch export    |
| `dist/styles.css`    | Build output — don't edit by hand                               |
| `fonts/`             | Self-hosted woff2 files (see `fonts/README.md`)                 |
| `images/`            | Your photo and Art Room images (see `images/README.md`)         |

## No external dependencies

The page loads **nothing from a third-party host** — no CDN, no Google Fonts —
so it's full speed from mainland China. Fonts are self-hosted from `fonts/`;
Chinese text uses the reader's system font (PingFang SC / Microsoft YaHei).

There is **no external call at all** — not even on interaction. The contact
form was removed in favour of the three direct links (email, GitHub, LinkedIn),
which is one less service to depend on and one less thing to keep working.

## Editing the text

All visible copy lives in `i18n.js`, as two dictionaries (`en` and `zh`) with
matching keys. To change a sentence, find its key there — you don't need to
touch `index.html`. To find which key an element uses, look for its
`data-i18n="..."` attribute in the markup.

Deliberately left untranslated, as visual style: the monospace frame labels
(`[ 01 / ABOUT ]`, `FIG. 01 — PORTRAIT`, `LOCAL TIME`, the project numbers),
the tech tags on project cards, and your name.

Language is remembered in `localStorage`; first-time visitors get Chinese if
their browser language is Chinese, English otherwise.

## What's left

Nothing — all the copy is written and there are no `[TODO: …]` placeholders
left on the page.

The site is live at **https://mikaeladyj.com**, served by GitHub Pages from
the `main` branch of `Mikaela-Cycho/Mikaela-Cycho.github.io`. The domain is
configured by the `CNAME` file in the repo root; don't delete it, or Pages
falls back to the github.io address.

If the domain ever changes, two places need updating: that `CNAME` file, and
the absolute `og:url` / `og:image` URLs in the `<head>` of `index.html`.

All images are optimised: `images/me.jpg` is 800×800 / 63 KB with EXIF
stripped, and the Art Room gallery is WebP at 536 KB total (down from 4.9 MB
of PNG). Untouched originals are kept as `images/me-full.jpg` and in
`images/art/_originals/` — neither is served, and you can leave
`_originals/` out when you upload.

## Deploying

The file is already named `index.html`, which GitHub Pages, Netlify, Vercel and
Cloudflare Pages all serve as the homepage. Run `npm run build`, then upload
the folder — or push it, if your host builds from a repo. Don't upload
`node_modules/`.
