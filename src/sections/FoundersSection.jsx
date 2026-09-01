import { useState } from "react";

import { SURFACE_BONE } from "@/lib/gradients";
import SectionHeading from "@/components/shared/SectionHeading";
import { founders } from "@/data/content";

/* The people building it.

   The old version hid each biography behind a chevron toggle. On a cream
   ground with room to breathe there is no reason to: five short quotes fit,
   and a quote you have to click for is a quote nobody reads. The photo still
   degrades to a labelled block if a file is missing. */
function FounderCard({ photo, name, role, quote }) {
  const [photoFailed, setPhotoFailed] = useState(!photo);

  return (
    <article className="flex flex-col bg-cream">
      <div className="relative overflow-hidden bg-sand" style={{ aspectRatio: "1 / 1" }}>
        {photoFailed ? (
          <div className="flex h-full w-full items-center justify-center px-4 text-center">
            <p className="type-label text-ink-50">Photo to follow</p>
          </div>
        ) : (
          <img
            src={photo}
            alt={name}
            onError={() => setPhotoFailed(true)}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-7">
        <div>
          <h3 className="type-h3 text-ink">{name}</h3>
          <p className="mt-2 text-[13px] font-bold uppercase leading-5 tracking-[0.12em] text-ember-deep"
             style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {role}
          </p>
        </div>
        <p className="text-[16px] leading-6 text-ink-70">“{quote}”</p>
      </div>
    </article>
  );
}

export default function FoundersSection({ surface = SURFACE_BONE }) {
  return (
    <section className="uh-rule px-6 py-24 sm:px-8 sm:py-32" style={{ background: surface }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="The team"
          heading="Built by people obsessed with human performance"
          lead="Elite coaching, combat sport, movement science and a slightly unhealthy enthusiasm for finding out what a body can do."
        />

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
