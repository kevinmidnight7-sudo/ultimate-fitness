import { useEffect } from "react";

const SITE = "https://theultimatehuman.fitness";

/* Sets or updates a <meta>/<link> in the head, creating it if the static
   index.html didn't ship one. */
function setTag(selector, create, attr, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/* Sets the document title, meta description, canonical URL and the Open Graph
   equivalents for a page. Deliberately tiny and dependency-free — a helmet
   library would be a lot of weight for a handful of attributes on eight
   static pages.

   One honest caveat: this runs in the browser. Facebook, LinkedIn, Slack and
   the rest do not execute JavaScript, so a link to any page shares the card
   declared statically in index.html. Keeping these in step still matters for
   the canonical tag, for crawlers that do render (Google), and for anyone
   reading the DOM — but per-page share cards need prerendering, which is
   noted in DEPLOYMENT.md rather than faked here. */
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setTag('meta[property="og:title"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      }, "content", title);
      setTag('meta[name="twitter:title"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "twitter:title");
        return m;
      }, "content", title);
    }

    if (description) {
      for (const [sel, key, name] of [
        ['meta[name="description"]', "name", "description"],
        ['meta[property="og:description"]', "property", "og:description"],
        ['meta[name="twitter:description"]', "name", "twitter:description"],
      ]) {
        setTag(sel, () => {
          const m = document.createElement("meta");
          m.setAttribute(key, name);
          return m;
        }, "content", description);
      }
    }

    if (path) {
      const href = new URL(path, SITE).href;
      setTag('link[rel="canonical"]', () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      }, "href", href);
      setTag('meta[property="og:url"]', () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        return m;
      }, "content", href);
    }
  }, [title, description, path]);
}
