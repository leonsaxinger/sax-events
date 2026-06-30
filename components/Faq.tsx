"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { ArrowRight } from "./Icons";

// TODO: Fragen/Antworten nach Bedarf anpassen.
const faqs: {
  q: string;
  a: string;
  link?: { label: string; href: string };
}[] = [
  {
    q: "Wo seid ihr buchbar?",
    a: "In ganz Österreich und Deutschland — von Clubs über Festivals bis zu Privat- und Firmenfeiern.",
  },
  {
    q: "Was kostet ein Event?",
    a: "Jedes Konzept ist individuell. Sag uns Rahmen, Datum und Location — du bekommst ein faires, transparentes Angebot.",
  },
  {
    q: "Was bringt ihr alles mit?",
    a: "Das komplette Programm: Showacts, Tänzerinnen, Hostessen, Deko & Material. Licht und Technik stellt die Location — wir bringen die Show und die Crew.",
  },
  {
    q: "Wer steht hinter den Shows?",
    a: "Ein großes Team aus Showacts, Tänzerinnen und Promo-Crew sorgt für die richtige Energie — auf der Bühne und auf Social Media.",
    link: { label: "Zum Team", href: "/team" },
  },
  {
    q: "Wie schnell bekomme ich eine Antwort?",
    a: "Per WhatsApp meist innerhalb weniger Stunden. Über das Formular spätestens am nächsten Werktag.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4 text-bubble">FAQ</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Kurz <span className="text-bubble">erklärt.</span>
          </h2>
          <p className="mt-5 text-lg text-chalk-muted">
            Noch Fragen offen? Schreib uns einfach direkt.
          </p>
        </Reveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} className="border-t border-white/10 first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl uppercase tracking-tight sm:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-200 ${
                      isOpen ? "bg-accent text-white" : "text-chalk-muted"
                    }`}
                  >
                    <span className="absolute h-3 w-px bg-current transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "none" }} />
                    <span className="h-px w-3 bg-current" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-2 leading-relaxed text-chalk-muted">{item.a}</p>
                      {item.link && (
                        <a
                          href={item.link.href}
                          className="group mb-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-accent hover:text-accent-bright"
                        >
                          {item.link.label}
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                      )}
                      {!item.link && <div className="pb-4" />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
