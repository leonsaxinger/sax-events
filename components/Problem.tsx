import { nightlife } from "@/data/site";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

const pointColors = ["text-acid", "text-bubble", "text-coral"];
const pointBars = ["bg-acid", "bg-bubble", "bg-coral"];

// Split the lead so the closing statement can carry visual weight.
const [leadMain, leadEmph] = nightlife.body.split("—").map((s) => s.trim());

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
        {/* Label row */}
        <Reveal className="flex items-center gap-5">
          <span className="ghost-num font-display text-6xl leading-none sm:text-7xl">01</span>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-coral">
            {nightlife.eyebrow}
          </span>
        </Reveal>

        {/* Headline + lead, magazine-style bottom-aligned split */}
        <div className="mt-12 grid gap-x-16 gap-y-10 sm:mt-10 sm:gap-y-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="font-display text-5xl uppercase leading-[0.86] tracking-tight sm:text-6xl lg:text-7xl">
              {nightlife.heading}{" "}
              <span className="text-coral">{nightlife.headingAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-chalk-muted sm:text-[1.35rem]">
              {leadMain} —{" "}
              <span className="font-semibold text-coral">{leadEmph}</span>
            </p>
          </Reveal>
        </div>

        {/* Three points — big ghost numbers, accent bar grows on hover */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {nightlife.points.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.12}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${pointBars[i % 3]}`}
              />
              <span className="ghost-num pointer-events-none absolute -right-1 -top-4 font-display text-[7rem] leading-none">
                {i + 1}
              </span>
              <span className={`relative font-display text-lg ${pointColors[i % 3]}`}>0{i + 1}</span>
              <h3 className="relative mt-3 font-display text-2xl uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="relative mt-2 text-chalk-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>

        {/* Solution — full-bleed image band with a slapped-on sticker */}
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
