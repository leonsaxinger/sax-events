"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gallery } from "@/data/site";
import Reveal from "./Reveal";
import SmartImg from "./SmartImg";
import { Close, ArrowRight } from "./Icons";

// Alternate the big feature tiles left / right for a more dynamic bento.
let featSeen = 0;
const featureCol: (string | null)[] = gallery.map((img) =>
  img.feature ? (featSeen++ % 2 === 1 ? "lg:col-start-3" : null) : null
);

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + gallery.length) % gallery.length
      ),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  return (
    <section id="galerie" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-coral">Galerie</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Echte Momente.{" "}
              <span className="text-coral">Keine Inszenierung.</span>
            </h2>
          </div>
          <p className="max-w-sm text-chalk-muted">
            Ein Blick auf das, was bei unseren Events wirklich passiert.
          </p>
        </Reveal>

        {/* Bento grid — dense auto-flow packs feature (2x2) + regular tiles
            into complete rows, so there is no floating / dead space. */}
        <div className="mt-12 grid grid-flow-dense auto-rows-[9rem] grid-cols-2 gap-2.5 sm:auto-rows-[11rem] sm:gap-3 lg:grid-cols-4 lg:auto-rows-[13rem]">
          {gallery.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 0.05}
              className={`h-full ${img.feature ? `col-span-2 row-span-2 ${featureCol[i] ?? ""}` : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label="Foto vergrößern"
                className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-600 sm:rounded-2xl"
              >
                <SmartImg
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="h-px w-5 bg-accent" />
                  <span className="font-display text-xs uppercase tracking-widest text-white/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              type="button"
              aria-label="Schließen"
              className="absolute right-4 top-4 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-chalk transition-colors hover:bg-white/10 sm:right-8 sm:top-8"
            >
              <Close className="h-6 w-6" />
            </button>

            <button
              type="button"
              aria-label="Vorheriges"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-3 z-10 flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-chalk transition-colors hover:bg-accent sm:left-8"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Nächstes"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-chalk transition-colors hover:bg-accent sm:right-8"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            <motion.img
              key={open}
              src={gallery[open].src}
              alt={gallery[open].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
