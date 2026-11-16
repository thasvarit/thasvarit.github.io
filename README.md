# My homepage

A plain HTML/CSS/JS personal site (no build step): dark theme with a lavender #b2a1ff accent, a greeting bubble on the profile photo, and a Works page. Inspired by the layout of craftz.dog.

## Deploy to GitHub Pages

1. Create a **public** repo named exactly `thasvarit.github.io` (or a repo like `home` to keep your blog at the root).
2. Upload these files to the repo root (or `git push` them).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)`.
4. Wait ~1 minute, then open `https://thasvarit.github.io`.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```


## Where to edit

| What | Where |
|---|---|
| Name, bio, timeline, socials | `index.html` |
| Project cards | `works.html` (put images in `images/`) |
| Profile photo and greeting bubble | `.avatar-wrap` in `index.html` (comment shows where to put `images/avatar.jpg`) |
| Colors | top of `style.css` (`:root`) |

## Search and sharing

- Tab icon: `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`.
- Search result text: the `<meta name="description">` in `index.html`.
- Photo in search results and link previews: `images/profile.jpg`, used by the `og:image` tag and the Person info (`application/ld+json`) in `index.html`.
- All of these assume the site lives at `https://thasvarit.github.io/`. If you publish somewhere else, search `index.html`, `robots.txt` and `sitemap.xml` for that address and replace it.
- To get Google to pick it up faster: add the site in Google Search Console, then submit `sitemap.xml`.
