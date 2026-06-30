import { nightlife } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

const pointColors = ["text-acid", "text-bubble", "text-coral"];
const pointBorders = ["hover:border-acid/40", "hover:border-bubble/40", "hover:border-coral/40"];

export default function Problem() {
  return (
    <section id="warum" className="relative overflow-hidden py-28 sm:py-36">
      {/* Ambient colour glows (cheap radial gradients) */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem]"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.20), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[24rem] w-[24rem]"
        style={{ background: "radial-gradient(circle, rgba(224,33,138,0.14), transparent 70%)" }}
      />

      <div className="container-x relative">
        {/* Problem statement — bold editorial, no side image */}
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-6 text-coral">{nightlife.eyebrow}</p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            {nightlife.heading}{" "}
            <span className="text-coral">{nightlife.headingAccent}</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-chalk-muted sm:text-xl">
            {nightlife.body}
          </p>
        </Reveal>

        {/* Three points */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {nightlife.points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.12}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 ${pointBorders[i % 3]}`}
            >
              <span className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] leading-none text-white/[0.04]">
                {i + 1}
              </span>
              <span className={`relative font-display text-lg ${pointColors[i % 3]}`}>
                0{i + 1}
              </span>
              <h3 className="relative mt-3 font-display text-2xl uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="relative mt-2 text-chalk-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Solution — full-bleed image band */}
        <Reveal className="mt-20 sm:mt-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/p-uni-1.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />

            <div className="relative max-w-2xl px-8 py-16 sm:px-12 sm:py-20 lg:py-24">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <span className="eyebrow">SAX-Events</span>
              </div>
              <h3 className="mt-6 font-display text-4xl uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
                {nightlife.solutionHeading}
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-muted sm:text-xl">
                {nightlife.solutionBody}
              </p>
              <a
                href="/team"
                className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
              >
                Von jung für jung — unser Team
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
