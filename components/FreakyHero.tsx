"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
  type Variants,
} from "framer-motion";
import { freaky } from "@/data/site";
import Magnetic from "./Magnetic";
import { ArrowRight, Instagram as InstagramIcon } from "./Icons";

const claimWords = freaky.claim.split(" ");

function Background({ scale }: { scale?: MotionValue<number> }) {
  return (
    <>
      <motion.video
        style={scale ? { scale } : undefined}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={freaky.heroPoster}
      >
        <source src={freaky.heroVideo} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/20" />
      <div
        className="absolute inset-0 opacity-35"
        style={{ background: "linear-gradient(to top, #E0218A, transparent 60%)" }}
      />
    </>
  );
}

function Claim({ animate = true }: { animate?: boolean }) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: 28, rotate: -3 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
      className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl"
    >
      {claimWords.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={`mr-[0.25em] inline-block ${i === claimWords.length - 1 ? "text-accent" : ""}`}
        >
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function HeroCtas() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Magnetic>
        <a
          href={freaky.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
        >
          Tickets sichern
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Magnetic>
      <a
        href={freaky.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-semibold text-chalk transition-colors hover:border-white/30 hover:bg-white/20"
      >
        <InstagramIcon className="h-5 w-5" />@{freaky.instagramHandle}
      </a>
    </div>
  );
}

function StaticHero() {
  return (
    <section id="freaky-hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Background />
      <div className="relative z-10 flex flex-col items-center px-6 py-28 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo/freaky-logo.png" alt="FREAKY" className="h-32 w-auto drop-shadow-2xl sm:h-44 lg:h-52" />
        <div className="mt-8">
          <Claim />
        </div>
        <div className="mt-10">
          <HeroCtas />
        </div>
      </div>
    </section>
  );
}

export default function FreakyHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const [claimIn, setClaimIn] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.14 && !claimIn) setClaimIn(true);
  });

  const logoY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);
  const logoScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.82]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const ctaOpacity = useTransform(scrollYProgress, [0.5, 0.68], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.5, 0.68], [24, 0]);

  if (reduce) return <StaticHero />;

  return (
    <section ref={ref} id="freaky-hero" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <Background scale={bgScale} />

        {/* Logo — big, animated, rises on scroll */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <motion.div style={{ y: logoY, scale: logoScale }}>
            <motion.img
              src="/logo/freaky-logo.png"
              alt="FREAKY"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
              transition={{
                opacity: { duration: 0.7, ease: "easeOut" },
                scale: { duration: 0.7, ease: "easeOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="h-32 w-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:h-44 lg:h-56"
            />
          </motion.div>
        </div>

        {/* Claim + tickets — anchored lower so the centered logo never overlaps */}
        <div className="absolute inset-x-0 bottom-[12%] z-10 mx-auto w-full max-w-3xl px-6 text-center">
          <Claim animate={claimIn} />
          <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="mt-8">
            <HeroCtas />
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
