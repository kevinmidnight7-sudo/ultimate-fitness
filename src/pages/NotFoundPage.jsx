import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routes } from "@/lib/routes";
import SectionLabel from "@/components/shared/SectionLabel";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page Not Found — Ultimate Human Index",
    description: "That page does not exist. Find your way back into the Ultimate Human Index.",
  });

  return (
    <section className="bg-bone px-6 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Error 404</SectionLabel>
        <h1 className="type-h2 mt-7 text-ink">This page doesn't exist.</h1>
        <p className="type-lead mt-6 max-w-2xl text-ink-70">
          Everything the site has is below.
        </p>

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex flex-col justify-between gap-6 bg-cream p-8 no-underline transition-colors duration-300 hover:bg-ember-tint"
            >
              <div>
                <p className="type-h3 text-ink transition-colors duration-300 group-hover:text-ember">
                  {page.label}
                </p>
                <p className="mt-3 text-[16px] leading-6 text-ink-70">{page.blurb}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
