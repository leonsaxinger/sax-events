"use client";

import { useEffect, useRef, useState } from "react";
import { stats, site } from "@/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { Instagram as InstagramIcon, ArrowRight } from "./Icons";

const accents = ["text-accent", "text-bubble", "text-acid", "text-coral"];

function format(value: number, decimals: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function Counter({
  to,
  decimals,
  suffix,
  active,
}: {
  to: number;
  decimals: number;
  suffix: string;
  active: boolean;
}) {
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
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
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

export default function Stats() {
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
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse, rgba(224,33,138,0.14), transparent 70%)" }}
      />

      <div ref={ref} className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center text-accent">
            <InstagramIcon className="h-4 w-4" />
            Reichweite, die spricht
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Unsere Zahlen auf Social Media.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center">
              <div className={`font-display text-5xl tracking-tight sm:text-6xl ${accents[i % 4]}`}>
                <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} active={active} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-chalk-muted">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex justify-center">
          <Magnetic>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-chalk transition-colors duration-200 hover:border-accent/50 hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
              Sieh selbst auf Instagram
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
