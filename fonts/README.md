# fonts/

Self-hosted woff2 files. The site makes **no request to Google Fonts** — or to
any other third-party host — so it loads at full speed from mainland China.

| File                       | Family         | Weight | Used for                        |
| -------------------------- | -------------- | -----: | ------------------------------- |
| `space-grotesk-500.woff2`  | Space Grotesk  |    500 | `headline-sm`                   |
| `space-grotesk-600.woff2`  | Space Grotesk  |    600 | `headline-lg`                   |
| `space-grotesk-700.woff2`  | Space Grotesk  |    700 | `display-lg`, bold headings     |
| `geist-sans-400.woff2`     | Geist          |    400 | body copy                       |
| `geist-sans-500.woff2`     | Geist          |    500 | `font-medium` on body text      |
| `geist-sans-700.woff2`     | Geist          |    700 | `font-bold` on body text        |
| `jetbrains-mono-400.woff2` | JetBrains Mono |    400 | `mono-body` — tags, nav, labels |
| `jetbrains-mono-500.woff2` | JetBrains Mono |    500 | `label-caps`                    |
| `jetbrains-mono-700.woff2` | JetBrains Mono |    700 | `mono-display`                  |

**203 KB total.** Latin subset only — these files contain no Chinese glyphs.

## Chinese text

Deliberately not a webfont. Chinese renders in the reader's own system font via
the stacks in `tailwind.config.js`:

```
PingFang SC     → macOS, iOS
Microsoft YaHei → Windows
sans-serif      → everything else
```

A CJK webfont is several megabytes even when subsetted, which would undo the
point of this exercise. Both of those fonts are present by default on the
systems that matter, so Chinese visitors see a proper Chinese face with zero
download.

## Where these came from

Downloaded from the [Fontsource](https://fontsource.org) npm packages, which
publish the same files Google Fonts serves. Google Fonts itself is unreachable
from mainland China, so fetching from `fonts.gstatic.com` isn't an option here.

To refresh or add a weight:

```bash
npm install --no-save @fontsource/space-grotesk @fontsource/jetbrains-mono @fontsource/geist-sans
cp node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2 fonts/space-grotesk-600.woff2
# ...then add a matching @font-face block in src/fonts.css and run `npm run build`
```

Note Fontsource names Geist's family `Geist Sans`. The `@font-face` rules in
`src/fonts.css` declare it as `Geist`, matching `tailwind.config.js` — the
family name is whatever we say it is, so nothing else needs to change.

These files are committed on purpose. Deploying stays "upload the folder."
