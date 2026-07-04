import { jars, jarsIntro } from "@/data/site";
import Reveal from "./Reveal";
import EventJarCard from "./EventJarCard";

export default function EventsJar() {
  return (
    <section id="konzepte" className="relative py-24 sm:py-32">
      <div className="container-x">
        {/* Label row */}
        <Reveal className="flex items-center gap-5">
          <span className="ghost-num font-display text-6xl leading-none sm:text-7xl">02</span>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-bubble">
            {jarsIntro.eyebrow}
          </span>
        </Reveal>

        {/* Headline + lead, magazine split (same pattern as section 01) */}
        <div className="mt-12 grid gap-x-16 gap-y-10 sm:mt-10 sm:gap-y-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-5xl uppercase leading-[0.88] tracking-tight sm:text-7xl">
              Fertige <span className="text-bubble">Konzepte.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-chalk-muted">
              {jarsIntro.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {jars.map((jar, i) => (
            <Reveal key={jar.name} delay={i * 0.1}>
              <EventJarCard jar={jar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
