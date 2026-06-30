"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Branded intro loader shown once per session: logo + counting progress,
 * then a smooth reveal of the page. Respects reduced-motion.
 */
export default function Preloader() {
  const [done, setDone] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("sax-preloaded")) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sessionStorage.setItem("sax-preloaded", "1");
      return;
    }

    setDone(false);
    document.documentElement.classList.add("lenis-stopped");
    document.body.style.overflow = "hidden";

    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setCount(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("sax-preloaded", "1");
        setTimeout(() => {
          document.documentElement.classList.remove("lenis-stopped");
          document.body.style.overflow = "";
          setDone(true);
        }, 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-accent/25 blur-[120px]" />

          <motion.img
            src="/logo/logo-black.png"
            alt="SAX-Events"
            style={{ filter: "invert(1)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-28 w-28 object-contain sm:h-32 sm:w-32"
          />

          {/* Progress bar */}
          <div className="relative mt-10 h-px w-48 overflow-hidden bg-white/15">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              style={{ width: `${count}%` }}
            />
          </div>
          <div className="relative mt-4 font-display text-sm tracking-[0.3em] text-chalk-muted">
            {String(count).padStart(3, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
