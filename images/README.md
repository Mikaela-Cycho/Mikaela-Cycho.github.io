# images/

Put your own image files here. The page references them by exact path, so the
filenames matter.

| Path                | Used for                          | Notes                                  |
| ------------------- | --------------------------------- | -------------------------------------- |
| `images/me.jpg`     | Portrait in the About section     | 800×800, already optimised (63 KB)     |
| `images/me-full.jpg`| Untouched original — not loaded   | 1391×2262. Re-crop from this if needed |
| `images/cursor_click_animation_sm.png` | The custom cursor | APNG, 63×64. Tip must stay at pixel (0,0) |
| `images/my_pfp.png` | Source avatar — not loaded by the page | 761×989 original, kept for re-exports |
| `images/my_pfp_sm.png` | Art Room easter-egg button in the footer | 70×96, 3.7 KB |

The favicons, `apple-touch-icon.png` and `og-image.jpg` at the project root are
also generated from `my_pfp.png`. If you change your avatar, regenerate all of
them together so the tab icon, home-screen icon, link preview and footer button
stay consistent.
| `images/art/*.webp` | The Art Room gallery              | Listed in `ART_PIECES` in `i18n.js`    |
| `images/art/_originals/` | Untouched source PNGs — not served | Safe to exclude when you deploy   |

If a file is missing, the page shows a `[ NO IMAGE ]` placeholder frame instead
of a broken-image icon — so it's safe to deploy before you've added everything.

To add, remove or reorder Art Room pieces, edit the `ART_PIECES` list at the
bottom of `i18n.js`. Images are shown at 4:3 with `object-contain`, so nothing
gets cropped whatever shape they are.

New pieces should be WebP. To convert one:

```bash
python -c "from PIL import Image; Image.open('in.png').convert('RGB').save('out.webp','WEBP',quality=90,method=6)"
```

Drop `.convert('RGB')` if the artwork has real transparency. Keep the original
in `_originals/` — WebP here is lossy, so it's not a round trip.

Keep files reasonably small (under ~500 KB each) so the page loads fast.
