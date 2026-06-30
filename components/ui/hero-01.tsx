"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { GradientWave } from "@/components/ui/gradient-wave";
import { partners } from "@/data/site";
import PartnerItem from "@/components/PartnerItem";

const LINES = ["NEXT", "GENERATION", "PARTYING"];
const TOTAL = LINES.join("").length;
const DESCRIPTION =
  "SAX-Events macht fertige Event-Konzepte mit eigenem Charakter und eigener Community. Wir bringen das Nachtleben dorthin, wo es noch knistert.";

const gradientProps = {
  colors: ["#3b0764", "#E0218A", "#fb7185", "#a3e635", "#2b0a3d"],
  shadowPower: 6,
  darkenTop: true,
  noiseFrequency: [0.0001, 0.0002] as [number, number],
  deform: { incline: 0.2, noiseAmp: 110, noiseFlow: 2 },
};

function Headline({ typed }: { typed: number }) {
  let gi = 0;
  return (
    <h1 className="font-display text-6xl uppercase leading-[0.82] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
      {LINES.map((line, li) => (
        <span key={li} className={`block ${li === 2 ? "text-accent" : ""}`}>
          {[...line].map((ch, ci) => {
            const cur = gi;
            gi += 1;
            return (
              <span key={ci} className="relative">
                {cur === typed && typed < TOTAL && (
                  <span className="animate-pulse text-accent">|</span>
                )}
                <span style={{ opacity: cur < typed ? 1 : 0 }}>{ch}</span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/** Static fallback for reduced-motion users (no scroll theatre, no typing). */
function StaticHero() {
  return (
    <section
      id="start"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <GradientWave {...gradientProps} />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(10,10,11,0.55),transparent_75%)]" />
      <div className="relative z-10 flex flex-col items-center px-6 py-28 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo/logo-black.png"
          alt="SAX-Events"
          style={{ filter: "invert(1)" }}
          className="h-28 w-28 object-contain sm:h-32 sm:w-32"
        />
        <Headline typed={TOTAL} />
        <p className="mt-8 max-w-xl text-base font-medium text-white/90 sm:text-lg">
          {DESCRIPTION}
        </p>
        <div className="mt-12">
          <p className="eyebrow mb-5 justify-center text-white/60">Unsere Partner</p>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-2xl border border-white/10 bg-ink/85 px-8 py-6">
            {partners.map((p) => (
              <PartnerItem key={p.name} name={p.name} logo={p.logo} mode={p.mode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroSection01() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [typed, setTyped] = useState(0);
  const [started, setStarted] = useState(false);

  // Start typing once the user has scrolled past the "logo only" phase.
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.1 && !started) setStarted(true);
  });

  useEffect(() => {
    if (!started || typed >= TOTAL) return;
    const t = setTimeout(() => setTyped((c) => c + 1), 60);
    return () => clearTimeout(t);
  }, [started, typed]);

  // Scroll-driven stages (hooks must run before any early return)
  const logoY = useTransform(scrollYProgress, [0, 0.22], [0, -255]);
  const logoScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.58]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.08, 0.14], [0, 1]);
  const descOpacity = useTransform(scrollYProgress, [0.42, 0.54], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.42, 0.54], [24, 0]);
  const partnersOpacity = useTransform(scrollYProgress, [0.64, 0.8], [0, 1]);
  const partnersY = useTransform(scrollYProgress, [0.64, 0.8], [24, 0]);

  if (reduce) return <StaticHero />;

  return (
    <section id="start" ref={ref} className="relative h-[360vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <GradientWave {...gradientProps} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(10,10,11,0.6),transparent_75%)]" />

        {/* Logo — centered first, rises as you scroll.
            Centering lives on the wrapper so framer's y/scale transform on the
            image can't override the horizontal centering. */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <motion.img
            src="/logo/logo-black.png"
            alt="SAX-Events"
            style={{ filter: "invert(1)", y: logoY, scale: logoScale }}
            className="h-28 w-28 object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
        </div>

        {/* Centered content stack (revealed by scroll) */}
        <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-6 text-center">
          {/* spacer keeps headline below the risen logo */}
          <div className="h-32 sm:h-40 lg:h-48" />
          <motion.div style={{ opacity: headlineOpacity }}>
            <Headline typed={typed} />
          </motion.div>
          <motion.p
            style={{ opacity: descOpacity, y: descY }}
            className="mx-auto mt-8 max-w-xl text-base font-medium text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-lg"
          >
            {DESCRIPTION}
          </motion.p>
          <motion.div style={{ opacity: partnersOpacity, y: partnersY }} className="mt-12">
            <p className="eyebrow mb-5 justify-center text-white/60">Unsere Partner</p>
            <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-2xl border border-white/10 bg-ink/85 px-8 py-6 sm:gap-x-12">
              {partners.map((p) => (
                <PartnerItem key={p.name} name={p.name} logo={p.logo} mode={p.mode} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70"
        >
          Scroll
          <span className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
