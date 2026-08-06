# Serving the UHI site from WordPress

This lets WordPress host the site so Ken can install and use plugins, while the
React front end (and all its motion/design) stays exactly as it is.

## How it works

```
GitHub (main)  →  GitHub Action builds the React app
               →  uploads theme + built app over SFTP
               →  WordPress serves it
```

`index.php` reads the built `index.html`, rewrites asset paths, and injects
`wp_head()` / `wp_footer()` — which is what makes plugins work.

## One-time setup

1. **Get WordPress hosting** and install WordPress (any host — SiteGround,
   Kinsta, WP Engine, Hostinger).
2. **Add the four repository secrets** listed at the top of
   `.github/workflows/deploy-wordpress.yml`.
3. **Push to `main`** — the Action builds and uploads the theme.
4. In WP admin: **Appearance → Themes → activate "Ultimate Human Index"**.
5. **Settings → Permalinks → Save** (flushes rewrite rules).

## What plugins will and won't do

**Work fine** — anything operating at the page/site level:
- Analytics (Google Analytics, Plausible, Fathom)
- SEO plugins (Yoast, RankMath) — they inject into `wp_head()`
- Security, firewalls, backups, caching
- Uptime and form plugins **on separate WordPress pages** (e.g. `/contact`)
- A blog at `/news` using normal WordPress posts

**Won't work** — anything that tries to lay out the front page:
- Page builders (Elementor, Divi, WPBakery) cannot edit the React sections.
  That is deliberate: it is what preserves the custom motion and design.
- Plugins cannot change React copy. Site copy still lives in the repo.

## Adding WordPress pages alongside the app

Create a page in WordPress as normal — because `functions.php` lets real
WP pages render themselves, `/news` or `/contact` will use WordPress (and any
plugin on them), while `/` continues to serve the React app.
