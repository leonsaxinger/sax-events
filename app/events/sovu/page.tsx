import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, WhatsApp, Pin } from "@/components/Icons";
import { sovu, site } from "@/data/site";

export const metadata: Metadata = {
  title: "SOVU — Day-to-Night Open Air | SAX-Events",
  description:
    "SOVU ist unser Day-to-Night Sommer-Event: von entspannten Stunden bei Tag über die goldene Stunde bis zur Party tief in die Nacht.",
};

const waLink = `https://wa.me/${site.contact.whatsapp}`;
const CREAM = "#F7EFE1";
const DARK = "#2B2118";
const MUTED = "#6B5E4E";

/** The day-to-night journey — colour instead of photos. */
const phaseStyles = [
  // 01 Day
  { bg: "linear-gradient(to bottom, #F7EFE1, #F6E6C6)", text: DARK, muted: MUTED, accent: "#C2410C", ghost: "rgba(43,33,24,0.06)" },
  // 02 Aperitivo
  { bg: "linear-gradient(to bottom, #F6E6C6, #F4B860)", text: DARK, muted: "#5C4A33", accent: "#B23A0C", ghost: "rgba(43,33,24,0.08)" },
  // 03 Sunset
  { bg: "linear-gradient(to bottom, #F4B860, #C2410C 55%, #6E2A63)", text: "#FFFFFF", muted: "rgba(255,255,255,0.85)", accent: "#FFE0B0", ghost: "rgba(255,255,255,0.10)" },
  // 04 Night
  { bg: "linear-gradient(to bottom, #6E2A63, #1A0A24 60%, #0A0A0B)", text: "#FFFFFF", muted: "rgba(255,255,255,0.75)", accent: "#FF8A4C", ghost: "rgba(255,255,255,0.06)" },
];

export default function SovuPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ============ HERO — bright summer / cream ============ */}
        <section
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
          style={{ backgroundColor: CREAM }}
        >
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(244,169,60,0.55), rgba(255,122,61,0.15) 45%, transparent 70%)" }}
          />
          <div className="container-x relative z-10 flex flex-col items-center px-6 pb-16 pt-28 text-center">
            <Reveal>
              <h1
                className="font-display text-[26vw] uppercase leading-[0.8] tracking-tight sm:text-[16rem]"
                style={{
                  backgroundImage: "linear-gradient(120deg, #F4A93C, #FF7A3D 55%, #C2410C)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {sovu.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-2 font-display text-xl uppercase tracking-[0.22em] sm:text-2xl"
                style={{ color: "#C2410C" }}
              >
                {sovu.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
                {sovu.intro}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "#9A8C77" }}>
                <Pin className="h-4 w-4" style={{ color: "#C2410C" }} />
                {sovu.location}
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <a
                href="#dabei"
                className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(120deg, #F4A93C, #FF7A3D)" }}
              >
                Sei dabei
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em]" style={{ color: "#9A8C77" }}>
            Scroll
            <span className="h-10 w-px" style={{ background: "linear-gradient(to bottom, #9A8C77, transparent)" }} />
          </div>
        </section>

        {/* ============ QUICK FACTS ============ */}
        <section style={{ backgroundColor: "#F6E6C6", color: DARK }} className="py-16 sm:py-20">
          <div className="container-x">
            <Reveal className="mb-10 max-w-2xl">
              <span className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "#C2410C" }}>
                Das Wichtigste in Kürze
              </span>
              <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Ein Event, ein ganzer Tag.
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4" style={{ backgroundColor: "rgba(43,33,24,0.12)" }}>
              {sovu.facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.08} className="bg-[#F6E6C6] p-6 sm:p-7">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                    {f.label}
                  </div>
                  <div className="mt-2 font-display text-xl uppercase leading-tight tracking-tight sm:text-3xl">
                    {f.value}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ THE DAY-TO-NIGHT JOURNEY (colour, no photos) ============ */}
        {sovu.phases.map((p, i) => {
          const s = phaseStyles[i];
          const alignRight = i % 2 === 1;
          return (
            <section
              key={p.no}
              className="relative flex min-h-[78svh] items-center overflow-hidden py-20 sm:min-h-[92svh] sm:py-24"
              style={{ background: s.bg, color: s.text }}
            >
              {/* huge ghost numeral — opposite side of the text */}
              <span
                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-display text-[34vw] leading-none sm:text-[24rem] lg:text-[28rem] ${
                  alignRight ? "right-[-6vw] lg:left-[-4vw] lg:right-auto" : "right-[-6vw]"
                }`}
                style={{ color: s.ghost }}
              >
                {p.no}
              </span>

              <div className="container-x relative z-10">
                <Reveal className={`max-w-2xl ${alignRight ? "lg:ml-auto lg:text-right" : ""}`}>
                  <div className={`flex flex-wrap items-center gap-3 ${alignRight ? "lg:justify-end" : ""}`}>
                    <span
                      className="rounded-full border px-4 py-1.5 font-display text-sm uppercase tracking-wide"
                      style={{ borderColor: s.accent, color: s.accent }}
                    >
                      {p.time}
                    </span>
                    <span className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: s.muted }}>
                      {p.label}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                    {p.title}
                  </h2>
                  <p className={`mt-5 max-w-lg text-lg leading-relaxed sm:mt-6 sm:text-xl ${alignRight ? "lg:ml-auto" : ""}`} style={{ color: s.muted }}>
                    {p.text}
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}

        {/* ============ ABLAUF — Vom Termin zur Party ============ */}
        <section className="relative bg-ink py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                So gehen wir&apos;s an
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
                Vom Termin zur Party.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-chalk-muted">
                Ein durchdachter Ablauf — von der ersten Idee bis zum letzten Track. Wir übernehmen alles, ihr feiert.
              </p>
            </Reveal>

            <div className="relative mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute left-0 right-0 top-[1.6rem] hidden h-px lg:block"
                style={{ background: "linear-gradient(to right, #F4A93C, #FF7A3D, #6D4AFF)", opacity: 0.4 }}
              />
              {sovu.process.map((step, i) => (
                <Reveal key={step.no} delay={i * 0.1} className="relative sm:pr-8">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink font-display text-sm"
                    style={{ color: "#FF8A4C" }}
                  >
                    {step.no}
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-chalk-muted">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA — Sei dabei ============ */}
        <section id="dabei" className="relative overflow-hidden bg-ink py-28 sm:py-36">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-72"
            style={{ background: "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(255,122,61,0.25), transparent 70%)" }}
          />
          <div className="container-x relative z-10 flex flex-col items-center text-center">
            <Reveal>
              <h2
                className="font-display text-7xl uppercase leading-none tracking-tight sm:text-8xl"
                style={{
                  backgroundImage: "linear-gradient(120deg, #F4A93C, #FF7A3D 55%, #C2410C)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {sovu.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-6 font-display text-4xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                Sei von Anfang an dabei.
              </h3>
              <p className="mt-5 flex items-center justify-center gap-2 text-lg text-white/80">
                <Pin className="h-5 w-5" style={{ color: "#FF8A4C" }} />
                {sovu.location}
              </p>
              <p className="mt-2 text-white/60">Termine folgen — sichere dir dein Update.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(120deg, #F4A93C, #FF7A3D)" }}
                  >
                    <WhatsApp className="h-5 w-5" />
                    Dabei sein
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition-colors hover:bg-white/20"
                >
                  Anfrage senden
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
