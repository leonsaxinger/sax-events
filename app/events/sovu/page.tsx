import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Magnetic from "@/components/Magnetic";
import { ArrowRight, WhatsApp, Pin } from "@/components/Icons";
import { sovu, site } from "@/data/site";

export const metadata: Metadata = {
  title: "SOVU im SURACE am See — SAX-Events",
  description:
    "SOVU im SURACE am See — das Day-to-Night Summer Lake Event. Von Sonne, See & Aperitivo bis zur Party am Wasser.",
};

const waLink = `https://wa.me/${site.contact.whatsapp}`;
const CREAM = "#F7EFE1";

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
          {/* warm sun glow */}
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(244,169,60,0.55), rgba(255,122,61,0.15) 45%, transparent 70%)" }}
          />
          <div className="container-x relative z-10 flex flex-col items-center px-6 pb-16 pt-28 text-center">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sovu/sovu-black.png"
                alt="SOVU"
                className="h-40 w-auto object-contain sm:h-52 lg:h-64"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-6 font-display text-xl uppercase tracking-[0.2em] sm:text-2xl"
                style={{ color: "#C2410C" }}
              >
                {sovu.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6 flex items-center justify-center gap-3" style={{ color: "#2B2118" }}>
                <span className="text-lg font-medium">im</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sovu/surace-cut.png"
                  alt="SURACE"
                  className="h-7 w-auto object-contain sm:h-8"
                />
                <span className="text-lg font-medium">am See</span>
              </div>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-8 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: "#6B5E4E" }}>
                {sovu.intro}
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <a
                href="#dabei"
                className="group mt-10 inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
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

        {/* ============ DAY VIBE (01) — light ============ */}
        <section style={{ backgroundColor: CREAM, color: "#2B2118" }} className="py-20 sm:py-28">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                <Parallax src={sovu.phases[0].img} alt={sovu.phases[0].label} className="h-full w-full" strength={50} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="font-display text-sm tracking-[0.2em]" style={{ color: "#C2410C" }}>
                {sovu.phases[0].no} · {sovu.phases[0].label}
              </span>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
                {sovu.phases[0].title}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: "#6B5E4E" }}>
                {sovu.phases[0].text}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ FOOD & APERITIVO (02) — light ============ */}
        <section style={{ backgroundColor: CREAM, color: "#2B2118" }} className="py-20 sm:py-28">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <span className="font-display text-sm tracking-[0.2em]" style={{ color: "#C2410C" }}>
                {sovu.phases[1].no} · {sovu.phases[1].label}
              </span>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl">
                {sovu.phases[1].title}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: "#6B5E4E" }}>
                {sovu.phases[1].text}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <div className="aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-xl">
                <Parallax src={sovu.phases[1].img} alt="SURACE" className="h-full w-full" strength={40} />
              </div>
              <div className="mt-8 aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-xl">
                <Parallax src="/images/sovu/food-2.jpg" alt="SURACE" className="h-full w-full" strength={40} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* transition cream -> sunset */}
        <div className="h-24 w-full" style={{ background: "linear-gradient(to bottom, #F7EFE1, #F4A93C)" }} />

        {/* ============ SUNSET MOMENT (03) — full-bleed golden ============ */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <Parallax fill src={sovu.phases[2].img} alt="Sunset am See" strength={90} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,8,20,0.85), rgba(255,122,61,0.15) 45%, transparent)" }} />
          <div className="container-x relative z-10 pb-24 pt-32">
            <Reveal>
              <span className="font-display text-sm tracking-[0.2em] text-white/80">
                {sovu.phases[2].no} · {sovu.phases[2].label}
              </span>
              <h2 className="mt-3 max-w-3xl font-display text-6xl uppercase leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-7xl lg:text-8xl">
                {sovu.phases[2].title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] sm:text-xl">
                {sovu.phases[2].text}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ NIGHT PARTY (04) — full-bleed dark ============ */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
          <Parallax fill src={sovu.phases[3].img} alt="Night Party am See" strength={90} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,16,0.92), rgba(8,8,16,0.35) 55%, rgba(8,8,16,0.25))" }} />
          <div className="absolute inset-0 bg-grape/10 mix-blend-overlay" />
          <div className="container-x relative z-10 pb-24 pt-32">
            <Reveal>
              <span className="font-display text-sm tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                {sovu.phases[3].no} · {sovu.phases[3].label}
              </span>
              <h2 className="mt-3 max-w-3xl font-display text-6xl uppercase leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl">
                {sovu.phases[3].title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
                {sovu.phases[3].text}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ============ SO GEHEN WIR'S AN (Ablauf) ============ */}
        <section className="relative bg-ink py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="font-display text-sm tracking-[0.2em]" style={{ color: "#FF8A4C" }}>
                So gehen wir&apos;s an
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
                Vom Termin zur Party.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-chalk-muted">
                Ein durchdachter Ablauf — von der ersten Idee bis zum letzten Track. So bringen wir SOVU ans Wasser.
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sovu/sunset-terrace.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,16,0.95), rgba(8,8,16,0.7))" }} />
          <div className="container-x relative z-10 flex flex-col items-center text-center">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sovu/sovu-white.png" alt="SOVU" className="h-28 w-auto object-contain sm:h-36" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] tracking-tight text-white sm:text-6xl">
                Sommer beginnt am See.
              </h2>
              <p className="mt-5 flex items-center justify-center gap-2 text-lg text-white/80">
                <Pin className="h-5 w-5" style={{ color: "#FF8A4C" }} />
                {sovu.venue}
              </p>
              <p className="mt-2 text-white/60">Termine folgen — sei als Erste:r dabei.</p>
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
