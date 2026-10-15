"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, ArrowDown } from "@/components/Icons";

const LINES = ["NEXT", "GENERATION", "PARTYING"];
const DESCRIPTION =
  "Fertige Event-Konzepte mit eigenem Charakter und eigener Community. Wir bringen das Nachtleben dorthin, wo es noch knistert.";

const headlineClass =
  "font-display text-6xl uppercase leading-[0.82] tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.7)] sm:text-8xl lg:text-9xl";

// Words punch in one after another on load — a fast, springy entrance.
const container: Variants = {
  hidden: {},
  show: { transition: { delayChildren: 0.25, staggerChildren: 0.14 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: 48, scale: 1.18 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 13, mass: 0.7 },
  },
};
const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function HeroSection01() {
  const reduce = useReducedMotion();

  return (
    <section id="start" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      {/* Background — real crowd energy, not an AI gradient */}
      {reduce ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src="/images/aftermovie-poster.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/aftermovie-poster.jpg"
        >
          <source src="/videos/aftermovie.mp4" type="video/mp4" />
        </video>
      )}

      {/* Legibility + brand tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[40rem] w-[40rem]"
        style={{ background: "radial-gradient(circle, rgba(224,33,138,0.35), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[34rem] w-[34rem]"
        style={{ background: "radial-gradient(circle, rgba(163,230,53,0.14), transparent 65%)" }}
      />

      {/* Content — bold, bottom-left editorial */}
      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "show"}
        className="container-x relative z-10 pb-20 pt-32 sm:pb-24"
      >
        <motion.p
          variants={fade}
          className="eyebrow mb-6 text-white/80"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Event-Agentur · Österreich
        </motion.p>

        <h1 className={headlineClass}>
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                variants={word}
                className={`inline-block will-change-transform ${i === 2 ? "text-accent" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          variants={fade}
          className="mt-8 max-w-xl text-base font-medium text-white/85 sm:text-lg"
        >
          {DESCRIPTION}
        </motion.p>

        <motion.div variants={fade} className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a
              href="#konzepte"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
            >
              Unsere Konzepte
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <a
            href="#kontakt"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Event anfragen
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={fade}
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "show"}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/60"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
