import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import StatGrid from "@/components/StatGrid";
import FreakyHero from "@/components/FreakyHero";
import { ArrowRight, Instagram as InstagramIcon, Sparkle } from "@/components/Icons";
import { freaky } from "@/data/site";

export const metadata: Metadata = {
  title: "FREAKY — SAX-Events",
  description:
    "FREAKY by SAX-Events — Free Shots, Hiphop & Reggaeton, Show-Momente & Dancers. Let's Go Freaky. Tickets auf TicketHead.",
};

export default function FreakyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ---- Hero (scroll-driven: Logo → Perks → CTA) ---- */}
        <FreakyHero />

        {/* ---- Story + Stats ---- */}
        <section className="relative py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <p className="eyebrow mb-4 text-accent">Was ist FREAKY?</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Mehr als eine Party.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-chalk-muted sm:text-xl">
                {freaky.intro}
              </p>
            </Reveal>

            <div className="mt-16">
              <StatGrid stats={freaky.stats} accent="single" />
            </div>
          </div>
        </section>

        {/* ---- Das erwartet dich (Perks / Free Specials) ---- */}
        <section className="relative py-12 sm:py-16">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4 text-accent">Das erwartet dich</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Free Specials &amp; mehr.
              </h2>
              <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {freaky.perks.map((p) => {
                  const free = p.startsWith("FREE ");
                  return (
                    <li key={p} className="flex items-center gap-3">
                      <Sparkle className="h-5 w-5 shrink-0 text-accent" />
                      <span className="text-base font-medium text-chalk sm:text-lg">
                        {free ? (
                          <>
                            <span className="font-bold text-accent">FREE</span>
                            {p.slice(4)}
                          </>
                        ) : (
                          p
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/p-freaky-10.jpg" alt="FREAKY Free Specials" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---- Highlights ---- */}
        <section className="relative py-12 sm:py-16">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent">Highlights</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Das macht FREAKY aus.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {freaky.features.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={(i % 4) * 0.08}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-accent/40"
                >
                  <span className="font-display text-sm text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-chalk-muted">{f.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Aftermovie ---- */}
        <section className="relative py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow mb-4 justify-center text-accent">Aftermovie</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Seht es. Spürt es.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <div className="mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-glow-lg">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  poster={freaky.aftermoviePoster}
                >
                  <source src={freaky.aftermovie} type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---- Locations / Clubs ---- */}
        <section className="relative py-24 sm:py-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent">Wo FREAKY läuft</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Unsere Partner-Clubs.
              </h2>
              <p className="mt-5 text-lg text-chalk-muted">
                Termine findest du auf TicketHead oder direkt bei den Clubs.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {freaky.clubs.map((club, i) => (
                <Reveal
                  key={club}
                  delay={(i % 3) * 0.06}
                  className="group flex min-h-[7rem] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center transition-colors duration-300 hover:border-accent/40"
                >
                  <span className="font-display text-xl uppercase leading-tight tracking-tight text-chalk/80 transition-colors group-hover:text-white sm:text-2xl">
                    {club}
                  </span>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15} className="mt-12 flex justify-center">
              <Magnetic>
                <a
                  href={freaky.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
                >
                  Termine & Tickets
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </section>

        {/* ---- Gallery ---- */}
        <section className="relative py-12 pb-24 sm:pb-32">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="eyebrow mb-4 text-accent">Impressionen</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                So sieht FREAKY aus.
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {freaky.gallery.map((src, i) => (
                <Reveal
                  key={src}
                  delay={(i % 4) * 0.05}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 ${
                    i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt="FREAKY"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Final CTA ---- */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2"
            style={{ background: "radial-gradient(ellipse, rgba(224,33,138,0.22), transparent 70%)" }}
          />
          <div className="container-x relative text-center">
            <Reveal>
              <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl">
                Let&apos;s Go <span className="text-accent">Freaky.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
