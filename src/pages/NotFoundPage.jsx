import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import usePageMeta from "@/hooks/usePageMeta";
import { routes } from "@/lib/routes";

export default function NotFoundPage() {
  usePageMeta({
    title: "Page Not Found — Ultimate Human Index",
    description: "That page does not exist. Find your way back into the Ultimate Human Index.",
  });

  return (
    <section
      className="uh-divide px-6 py-28"
      style={{ background: "linear-gradient(180deg, #070707 0%, #0a0a0a 100%)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 shrink-0 bg-lime-400" />
          <p
            className="text-[11px] font-bold uppercase tracking-[0.32em] text-lime-400"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Error 404
          </p>
        </div>

        <h1
          className="uppercase text-white"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.6rem)",
            lineHeight: 1.04,
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
          }}
        >
          Off the Course.
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-neutral-400">
          That page does not exist. Everything the site has is below.
        </p>

        <div className="mt-12 grid gap-px border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex flex-col justify-between gap-6 bg-[#08090a] p-7 no-underline transition-colors duration-300 hover:bg-lime-400/[0.045]"
            >
              <div>
                <p
                  className="uppercase leading-none text-white transition-colors duration-300 group-hover:text-lime-400"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                  }}
                >
                  {page.label}
                </p>
                <p className="mt-3 text-[16px] leading-6 text-neutral-400">{page.blurb}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-lime-400/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime-400" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
