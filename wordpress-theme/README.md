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

## Deep links and the 404 status header

The front end is a multi-page site using `BrowserRouter`, so `/the-index`,
`/how-it-works` and the rest are real URLs someone can land on directly, share,
or have indexed.

WordPress has no page at any of them. Its template hierarchy falls through to
this theme's `index.php`, which serves the app correctly — but it sends a
**404 status header** with it. Nothing looks wrong in a browser, because the
app renders normally and the status code is invisible. But that header is what
machines read:

- Search engines drop the page from the index.
- Caching plugins and CDNs refuse to cache it, so every visit hits PHP.

`functions.php` fixes this with an allowlist. `uhi_app_routes()` holds the
paths the router owns; on `template_redirect` a request for one of them has
`is_404` cleared and `status_header( 200 )` sent, before the template loader
picks a template. `index.php` is still what runs.

**When you add or rename a route in the app, add it to `uhi_app_routes()` in
`functions.php` too.** The list is `routes` from `src/lib/routes.js` minus the
leading slashes, with the front page as `''`. Miss one and the page still
works in a browser while quietly going un-indexed and un-cached.

The allowlist also carries the **pre-rebrand URLs** — `personal-index`,
`personal-coach`, `subscribe`, `challenge` and `compete` — which the app
redirects to their new homes (see `legacyPathRedirects` in the same file).
Those need the 200 for the same reason: WordPress has to serve the page before
the React router gets a chance to redirect it. Remove one here and every old
link to it dies.

Anything not on the list still 404s properly — WordPress sends the 404 header
and the app renders its own branded 404 page. That is the behaviour you want:
a genuinely wrong URL should say so.

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
