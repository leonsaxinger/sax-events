import { services } from "@/data/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        {/* Left: heading */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4 text-acid">Was wir machen</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Vom ersten Reel bis zum{" "}
            <span className="text-acid">letzten Song.</span>
          </h2>
          <p className="mt-5 text-lg text-chalk-muted">
            Marketing, das vorglüht. Programm, das abliefert. Alles aus einer
            Hand.
          </p>
        </Reveal>

        {/* Right: editorial list, hairline dividers only */}
        <div>
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.06}
              className="group flex gap-6 border-t border-white/10 py-7 transition-colors duration-300 first:border-t-0"
            >
              <span className="mt-1 font-display text-base font-bold text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-chalk-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
