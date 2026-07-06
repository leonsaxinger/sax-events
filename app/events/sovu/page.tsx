import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, WhatsApp, Pin, Calendar, Check } from "@/components/Icons";
import { sovu, site } from "@/data/site";

export const metadata: Metadata = {
  title: "SOVU — Day-to-Night Open Air am Oedter See | SAX-Events",
  description:
    "SOVU: entspanntes Day-to-Night Open Air am Oedter See in Traun (16–24 Uhr). House & Electronic, gute Drinks, ruhiger Vibe — mit durchdachtem Sicherheits- und Lärmschutzkonzept.",
};

const waLink = `https://wa.me/${site.contact.whatsapp}`;
const CREAM = "#F7EFE1";
const DARK = "#2B2118";
const MUTED = "#6B5E4E";

/** The day-to-night journey — colour, warmed up by real photos mid-way. */
const phaseStyles = [
  // 01 Day
  { bg: "linear-gradient(to bottom, #F7EFE1, #F6E6C6)", text: DARK, muted: MUTED, accent: "#C2410C", ghost: "rgba(43,33,24,0.06)" },
  // 02 Aperitivo (photo)
  { bg: "linear-gradient(to bottom, #F6E6C6, #F4B860)", text: DARK, muted: "#5C4A33", accent: "#B23A0C", ghost: "rgba(43,33,24,0.08)" },
  // 03 Sunset (photo)
  { bg: "linear-gradient(to bottom, #F4B860, #C2410C 55%, #6E2A63)", text: "#FFFFFF", muted: "rgba(255,255,255,0.85)", accent: "#FFE0B0", ghost: "rgba(255,255,255,0.10)" },
  // 04 Ausklang / Night
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

            {/* Date + location line */}
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold" style={{ color: DARK }}>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" style={{ color: "#C2410C" }} />
                  {sovu.dateLabel}
                  <span className="rounded-full px-2 py-0.5 text-xs font-medium" style={{ backgroundColor: "rgba(194,65,12,0.12)", color: "#C2410C" }}>
                    {sovu.dateNote}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Pin className="h-4 w-4" style={{ color: "#C2410C" }} />
                  {sovu.location}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-7 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: MUTED }}>
                {sovu.intro}
              </p>
            </Reveal>
            <Reveal delay={0.34}>
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
                Ein Nachmittag, ein Abend.
              </h2>
            </Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-3" style={{ backgroundColor: "rgba(43,33,24,0.12)" }}>
              {sovu.facts.map((f) => (
                <div key={f.label} className="bg-[#F6E6C6] p-6 sm:p-7">
                  <div className="text-xs uppercase tracking-[0.18em]" style={{ color: MUTED }}>
                    {f.label}
                  </div>
                  <div className="mt-2 font-display text-xl uppercase leading-tight tracking-tight sm:text-2xl">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ THE DAY-TO-NIGHT JOURNEY ============ */}
        {sovu.phases.map((p, i) => {
          const s = phaseStyles[i];
          const hasImg = "img" in p && Boolean(p.img);
          const alignRight = i % 2 === 1;
          const text = hasImg ? "#FFFFFF" : s.text;
          const muted = hasImg ? "rgba(255,255,255,0.82)" : s.muted;
          const accent = hasImg ? "#FFD9A8" : s.accent;
          const ghost = hasImg ? "rgba(255,255,255,0.12)" : s.ghost;
          return (
            <section
              key={p.no}
              className="relative flex min-h-[78svh] items-center overflow-hidden py-20 sm:min-h-[92svh] sm:py-24"
              style={hasImg ? { color: text } : { background: s.bg, color: text }}
            >
              {hasImg && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={(p as { img: string }).img}
                    alt={`${p.label} — SOVU am Oedter See`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(8,6,14,0.9), rgba(8,6,14,0.3) 55%, rgba(8,6,14,0.55))" }}
                  />
                </>
              )}

              {/* huge ghost numeral — opposite side of the text */}
              <span
                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-display text-[34vw] leading-none sm:text-[24rem] lg:text-[28rem] ${
                  alignRight ? "right-[-6vw] lg:left-[-4vw] lg:right-auto" : "right-[-6vw]"
                }`}
                style={{ color: ghost }}
              >
                {p.no}
              </span>

              <div className="container-x relative z-10">
                <Reveal className={`max-w-2xl ${alignRight ? "lg:ml-auto lg:text-right" : ""}`}>
                  <div className={`flex flex-wrap items-center gap-3 ${alignRight ? "lg:justify-end" : ""}`}>
                    <span
                      className="rounded-full border px-4 py-1.5 font-display text-sm uppercase tracking-wide"
                      style={{ borderColor: accent, color: accent }}
                    >
                      {p.time}
                    </span>
                    <span className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: muted }}>
                      {p.label}
                    </span>
                  </div>
                  <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
                    {p.title}
                  </h2>
                  <p className={`mt-5 max-w-lg text-lg leading-relaxed sm:mt-6 sm:text-xl ${alignRight ? "lg:ml-auto" : ""}`} style={{ color: muted }}>
                    {p.text}
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}

        {/* ============ KONZEPT & SICHERHEIT ============ */}
        <section className="relative bg-ink py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                Konzept & Sicherheit
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
                Durchdacht. Sicher.{" "}
                <span style={{ color: "#FF8A4C" }}>Rücksichtsvoll.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-chalk-muted">
                SOVU ist ein ruhiges, sauber organisiertes Open Air. Begrenzte
                Gästezahl, klarer Aufbau und ein Lärmschutz, der Anrainer und
                Natur bewusst respektiert.
              </p>
            </Reveal>

            {/* Lageplan / site map */}
            <Reveal className="mt-12">
              <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sovu/lageplan.jpg"
                  alt="Geländeaufteilung der SOVU Outdoor-Party am Oedter See: umzäunter Partybereich, DJ-Pult, zwei Ein- und Ausgänge, öffentliche Toiletten und Starkstromanschluss."
                  className="w-full"
                />
              </figure>
              <figcaption className="mt-3 text-sm text-chalk-dim">
                Geländeaufteilung am Oedter See — umzäunter Partybereich, zwei
                Ein-/Ausgänge, Sanitäranlagen und fester Stromanschluss.
              </figcaption>
            </Reveal>

            {/* Safety grid */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sovu.safety.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 0.06}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(255,138,76,0.14)", color: "#FF8A4C" }}
                  >
                    <Check className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-chalk-muted">{item.text}</p>
                </Reveal>
              ))}
            </div>

            {/* Anrainer / noise-protection highlight */}
            <Reveal className="mt-6">
              <div
                className="grid gap-8 rounded-[2rem] border border-white/10 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12"
                style={{ background: "linear-gradient(135deg, rgba(255,122,61,0.10), rgba(10,10,11,0.2))" }}
              >
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                    Rücksicht auf Anrainer & Natur
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
                    Leise, wo es zählt.
                  </h3>
                  <p className="mt-4 leading-relaxed text-chalk-muted">
                    Uns ist wichtig, dass ringsum niemand gestört wird. Deshalb
                    setzen wir auf moderate Lautstärke, klare Endzeiten und einen
                    entspannten Sound — kein lauter Rummel.
                  </p>
                </div>
                <ul className="space-y-3">
                  {sovu.neighbours.map((n) => (
                    <li key={n} className="flex items-start gap-3 text-chalk">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(255,138,76,0.16)", color: "#FF8A4C" }}>
                        <Check className="h-4 w-4" />
                      </span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ ABLAUF — Vom Termin zur Party ============ */}
        <section className="relative bg-ink pb-24 sm:pb-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="font-display text-sm uppercase tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                So läuft&apos;s ab
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
                Vom Termin zur Party.
              </h2>
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
                  <h3 className="mt-5 font-display text-xl uppercase tracking-tight text-white sm:text-2xl">
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
              <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" style={{ color: "#FF8A4C" }} />
                  {sovu.dateLabel} · {sovu.dateNote}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Pin className="h-5 w-5" style={{ color: "#FF8A4C" }} />
                  {sovu.location}
                </span>
              </div>
              <p className="mt-3 text-white/60">
                Eintritt &amp; Bar vor Ort · Preise auf Anfrage · begrenzte Plätze.
              </p>
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
