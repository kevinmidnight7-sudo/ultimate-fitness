# Deploying the UHI site

Two hosting paths exist in this repository. Only one of them currently works,
and that needs a decision. Everything below was verified on 1 Sep 2026 unless
it says otherwise.

## The short version

- **Vercel appears to be the live host, deploying from `main`.** It serves the
  site as a static SPA, configured by `vercel.json` at the repository root.
- **The WordPress deployment has never once succeeded.** The workflow exists,
  builds fine, and fails at the upload step every time because its SFTP
  secrets are not set.
- Which of the two should be authoritative is an open decision — see
  "Decisions needed" at the end.

## Vercel

`vercel.json` at the repository root does three things:

1. **`rewrites`** — the SPA catch-all. Every path that is not a real file on
   disk is served `index.html`, so React Router can resolve it. Without this,
   opening `https://theultimatehuman.fitness/the-index` directly, or hard
   refreshing it, returns Vercel's own `404: NOT_FOUND` page: the app only
   works if you arrive at `/` first and click. This was the reported bug.

   Vercel checks the filesystem *before* applying rewrites, so hashed bundles
   under `/assets`, `/images`, `/icons.svg` and `/favicon.svg` are still served
   as themselves. The rewrite cannot swallow them.

2. **`redirects`** — real HTTP 308s for the five pre-rebrand URLs
   (`/personal-index`, `/personal-coach`, `/subscribe`, `/challenge`,
   `/compete`). These run before the rewrite, so an old link gets a proper
   permanent redirect that search engines can follow, rather than a 200 and a
   client-side bounce.

3. **`trailingSlash: false`** — `/about/` 308s to `/about`, so one page is one
   URL. The canonical tags the app emits have no trailing slash.

The equivalent client-side redirects in `src/lib/routes.js` are **not**
redundant and must stay: they are what makes the old URLs work on the
WordPress path, and they cost nothing on Vercel because the server redirect
fires first.

`LegacyHashRedirect` must also stay. Hash fragments (`/#score`) are never sent
to the server, so no amount of Vercel configuration can catch them — only the
browser can.

### Known limitation

With a catch-all rewrite, a genuinely wrong URL returns **HTTP 200** with the
app's own 404 page inside it — a "soft 404". This is inherent to static SPA
hosting and is what every Vite-on-Vercel site does. Search engines handle it
(Google reads the rendered page), but it is a real difference from the
WordPress path, which sends a true 404 header for unknown paths.

## WordPress

`wordpress-theme/` + `.github/workflows/deploy-wordpress.yml` build the app and
upload it into a WordPress theme over SFTP, so WordPress plugins are available
at the hosting layer. `functions.php` has its own route allowlist that must stay
in step with `src/lib/routes.js` — see `wordpress-theme/README.md`.

**It has never deployed.** Eight runs since 6 Aug 2026, eight failures, all at
the same step:

```
##[error]Error: Input required and not supplied: server
with:
  server-dir: /
```

The React build succeeds every time; the upload never starts, because
`WP_SFTP_HOST` (and, judging by the empty `server-dir`, `WP_THEME_PATH`) are
not set as repository secrets. The four required secrets are listed at the top
of the workflow file.

So nothing has ever reached WordPress from CI. If the live site is being served
by WordPress, it is from a manual upload, not from this pipeline.

## What happened on 1 Sep 2026

The rebrand appeared on the live site before anyone deployed it by hand. The
explanation is straightforward and does not involve a manual promotion:

- 19:47 — the rebrand branch was pushed.
- 20:05 — **PR #67 was merged into `main`** by the repository owner.
- `main` (`fe7123cc`) is that merge commit. Its tree is byte-identical to the
  branch head `d2a37ea`.

If Vercel is set to deploy `main`, that merge is what put the rebrand live.

This also answers a question that was worth asking: **a future deploy from
`main` can no longer restore the old event-first site.** `main` *is* the
rebrand now. That risk was real up to 20:05 on 1 Sep and is gone.

## What is confirmed, and what is inferred

Confirmed from the repository and the Actions API:

- `main` contains the rebrand, via PR #67, merged 2026-09-01 20:05 UTC.
- The WordPress workflow has failed on all 8 of its runs, at the SFTP step, for
  want of secrets.

Inferred, and needing confirmation in the Vercel dashboard by someone with
access:

- That Vercel is the production host at all. The evidence is the reported error
  page: `404: NOT_FOUND` is Vercel's, not WordPress's or a generic server's.
- That its production branch is `main`.

This repository has no Vercel project ID, no `.vercel` directory and no Vercel
CLI credentials, so none of that can be read from here.

## Decisions needed

1. **Confirm the production branch.** Vercel → Project → Settings → Git →
   Production Branch. It should be `main`.
2. **Pick one authoritative host.** Running both means the site can be two
   different things depending on which one a visitor's DNS reaches. If Vercel
   is it, the WordPress workflow should be disabled rather than left failing on
   every merge. If WordPress is it, its four secrets need setting and the
   Vercel project needs removing from the domain.
3. **Fix one canonical hostname.** Apex (`theultimatehuman.fitness`) and `www`
   must not both serve content: one should 308 to the other. The app's
   canonical tags, `og:url` and structured data all use the **apex**, so the
   apex should be primary and `www` should redirect to it. This is a Vercel
   domain setting, not something `vercel.json` can do.
4. **Merge this branch before relying on direct links.** The SPA rewrite only
   exists on this branch. Until it is merged and deployed, every internal URL
   still 404s on a direct request.
