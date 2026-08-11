import { useEffect } from "react";

/* Sets the document title, meta description and canonical URL for a page.
   Deliberately tiny and dependency-free — a helmet library would be a lot of
   weight for three attributes on seven static pages. */
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }

    if (path) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", new URL(path, "https://theultimatehuman.fitness").href);
    }
  }, [title, description, path]);
}
