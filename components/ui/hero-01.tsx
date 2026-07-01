"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { GradientWave } from "@/components/ui/gradient-wave";

const LINES = ["NEXT", "GENERATION", "PARTYING"];
const DESCRIPTION =
  "SAX-Events macht fertige Event-Konzepte mit eigenem Charakter und eigener Community. Wir bringen das Nachtleben dorthin, wo es noch knistert.";

// Each word flies in over its own slice of the scroll, from alternating sides.
const WORD_RANGES: [number, number][] = [
  [0.18, 0.32],
  [0.24, 0.4],
  [0.3, 0.48],
];
const WORD_DIRS = [-1, 1, -1];

const gradientProps = {
  colors: ["#3b0764", "#E0218A", "#fb7185", "#a3e635", "#2b0a3d"],
  shadowPower: 6,
  darkenTop: true,
  noiseFrequency: [0.0001, 0.0002] as [number, number],
  deform: { incline: 0.2, noiseAmp: 110, noiseFlow: 2 },
};

const headlineClass =
  "font-display text-5xl uppercase leading-[0.88] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-7xl sm:leading-[0.82] lg:text-8xl";

/** One headline word, revealed with a kinetic fly-in driven by scroll. */
function KineticWord({
  text,
  accent,
  progress,
  range,
  dir,
}: {
  text: string;
  accent?: boolean;
  progress: MotionValue<number>;
  range: [number, number];
  dir: number;
}) {
  const [a, b] = range;
  const mid = (a + b) / 2;
  const opacity = useTransform(progress, [a, mid], [0, 1]);
  const x = useTransform(progress, [a, b], [dir * 120, 0]);
  const y = useTransform(progress, [a, b], [56, 0]);
  // Overshoot: settles slightly past 1 then back for a punchy pop.
  // Transform-only (no blur) so it composites on the GPU and stays smooth.
  const scale = useTransform(progress, [a, mid, b], [1.28, 1.06, 1]);

  return (
    <motion.span
      style={{ opacity, x, y, scale }}
      className={`block will-change-transform ${accent ? "text-accent" : ""}`}
    >
      {text}
    </motion.span>
  );
}

/** Static fallback for reduced-motion users (no scroll theatre, no motion). */
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
        <h1 className={headlineClass}>
          {LINES.map((line, li) => (
            <span key={li} className={`block ${li === 2 ? "text-accent" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-xl text-base font-medium text-white/90 sm:text-lg">
          {DESCRIPTION}
        </p>
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

  // Stage 1 — logo: gentle lift, a punchy pulse, then a glowing fade-out.
  const logoY = useTransform(scrollYProgress, [0, 0.24], [0, -70]);
  const logoScale = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1.12, 0.7]);
  const logoOpacity = useTransform(scrollYProgress, [0.16, 0.26], [1, 0]);
  // Glow flare behind the logo that peaks right as the logo dissolves.
  // Opacity-only (fixed size) — animating scale on a blurred layer re-rasters
  // the blur every frame and was the main source of scroll lag.
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.32], [0, 0.9, 0]);

  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);

  // Parallax depth — headline + description drift together (mild) so their
  // spacing stays constant and they never collide or crawl up under the navbar.
  const headlineY = useTransform(scrollYProgress, [0.18, 1], [40, -24]);
  const descOpacity = useTransform(scrollYProgress, [0.56, 0.7], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.56, 0.7], [28, 0]);

  // Colour shift — a magenta/acid wash that rises over the base gradient.
  const washOpacity = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);

  if (reduce) return <StaticHero />;

  return (
    <section id="start" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <GradientWave {...gradientProps} />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(10,10,11,0.6),transparent_75%)]" />

        {/* Scroll-driven colour wash for a subtle mood shift over the gradient. */}
        <motion.div
          style={{ opacity: washOpacity }}
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_60%_at_50%_60%,rgba(224,33,138,0.35),transparent_65%),radial-gradient(ellipse_50%_40%_at_20%_20%,rgba(163,230,53,0.18),transparent_60%)]"
        />

        {/* Glow flare that blooms as the logo dissolves into the headline. */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8),rgba(224,33,138,0.45)_42%,transparent_70%)] blur-2xl"
        />

        {/* Logo — centered, lifts, pulses, then fades. Wrapper owns the
            horizontal centering so the transforms can't fight it. */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <motion.img
            src="/logo/logo-black.png"
            alt="SAX-Events"
            style={{ filter: "invert(1)", y: logoY, scale: logoScale, opacity: logoOpacity }}
            className="h-24 w-24 object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] will-change-transform sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
        </div>

        {/* Headline — kinetic words fly in where the logo was.
            Centering lives on the outer wrapper; the inner motion layer only
            drives the vertical parallax so it can't override -translate-x-1/2. */}
        <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-3xl -translate-x-1/2 -translate-y-1/2 px-6 text-center">
          <motion.div style={{ y: headlineY }}>
            <h1 className={headlineClass}>
              {LINES.map((line, li) => (
                <KineticWord
                  key={line}
                  text={line}
                  accent={li === 2}
                  progress={scrollYProgress}
                  range={WORD_RANGES[li]}
                  dir={WORD_DIRS[li]}
                />
              ))}
            </h1>
            <motion.p
              style={{ opacity: descOpacity, y: descY }}
              className="mx-auto mt-8 max-w-xl text-base font-medium text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-lg"
            >
              {DESCRIPTION}
            </motion.p>
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
