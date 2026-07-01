import { services } from "@/data/site";
import Reveal from "./Reveal";
import Sticker from "./Sticker";

export default function Services() {
  return (
    <section id="leistungen" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        {/* Left: heading block with ghost index + sticker */}
        <Reveal className="relative lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="ghost-num font-display text-6xl leading-none sm:text-7xl">02</span>
            <span className="font-display text-sm uppercase tracking-[0.3em] text-acid">
              Was wir machen
            </span>
          </div>
          <h2 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Vom ersten Reel bis zum{" "}
            <span className="text-acid">letzten Song.</span>
          </h2>
          <p className="mt-5 text-lg text-chalk-muted">
            Marketing, das vorglüht. Programm, das abliefert. Alles aus einer Hand.
          </p>
          <Sticker rotate={-6} color="acid" className="mt-8">
            all-in-one
          </Sticker>
        </Reveal>

        {/* Right: editorial list — big index, accent slides in on hover */}
        <div>
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.06}
              className="group relative flex gap-6 border-t border-white/10 py-7 first:border-t-0"
            >
              <span className="mt-1 font-display text-lg text-acid/70 transition-colors duration-200 group-hover:text-acid">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <span className="absolute -left-6 top-2 h-8 w-1 origin-top scale-y-0 bg-acid transition-transform duration-300 group-hover:scale-y-100" />
                <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-200 group-hover:translate-x-1 sm:text-3xl">
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
