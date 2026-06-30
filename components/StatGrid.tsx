"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Stat = { to: number; decimals: number; suffix: string; label: string };

const accents = ["text-accent", "text-bubble", "text-acid", "text-coral"];

function format(value: number, decimals: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function Counter({ to, decimals, suffix, active }: Stat & { active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return (
    <span>
      {format(val, decimals)}
      {suffix}
    </span>
  );
}

export default function StatGrid({
  stats,
  accent = "brand",
}: {
  stats: Stat[];
  accent?: "brand" | "single";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid gap-x-6 gap-y-12 ${stats.length >= 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-3"}`}
    >
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="text-center">
          <div
            className={`font-display text-5xl tracking-tight sm:text-6xl ${
              accent === "single" ? "text-accent" : accents[i % 4]
            }`}
          >
            <Counter {...s} active={active} />
          </div>
          <div className="mt-3 text-sm uppercase tracking-[0.18em] text-chalk-muted">
            {s.label}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
