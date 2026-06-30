import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import SmartImg from "@/components/SmartImg";
import OfficeBooking from "@/components/OfficeBooking";
import { office, site } from "@/data/site";
import {
  Monitor,
  Users,
  Palette,
  Mirror,
  Pin,
  ArrowRight,
  WhatsApp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Creative Space mieten — SAX-Events",
  description:
    "Modernes Office & Creative Space in Ansfelden (Linz-Land) — buchbar für Meetings, Coworking, Shootings, Content, Tanz & Yoga. Mit 5-Meter-Spiegelwand.",
};

const roomIcons: Record<string, (p: React.SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  monitor: Monitor,
  users: Users,
  palette: Palette,
  mirror: Mirror,
};

const waLink = `https://wa.me/${site.contact.whatsapp}`;
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`;

export default function OfficePage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32">
        {/* ---- Hero ---- */}
        <section className="container-x py-12 sm:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4 text-bubble">
                <Pin className="h-4 w-4" />
                Creative Space · {office.location}
              </p>
              <h1 className="font-display text-6xl uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
                Dein Space für{" "}
                <span className="text-bubble">jede Idee.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-muted">
                {office.intro}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href="#anfrage"
                    className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
                  >
                    Verfügbarkeit anfragen
                    <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-chalk transition-colors hover:border-white/30 hover:bg-white/10"
                >
                  <WhatsApp className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-ink-700 to-ink">
                <SmartImg src="/images/office/hero.jpg" alt="SAX Creative Space" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---- Use cases ---- */}
        <section className="container-x py-12 sm:py-16">
          <Reveal>
            <p className="eyebrow mb-5 text-bubble">Wofür?</p>
            <div className="flex flex-wrap gap-3">
              {office.useCases.map((u) => (
                <span
                  key={u}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-display text-sm uppercase tracking-wide text-chalk/85"
                >
                  {u}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ---- Räume ---- */}
        <section className="container-x py-12 sm:py-20">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4 text-bubble">Die Räume</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Alles unter einem Dach.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {office.rooms.map((room, i) => {
              const Icon = roomIcons[room.icon] ?? Monitor;
              return (
                <Reveal
                  key={room.title}
                  delay={(i % 2) * 0.1}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-bubble/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-700 to-ink-600">
                    <SmartImg src={room.img} alt={room.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bubble/15 text-bubble">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-display text-2xl uppercase tracking-tight">{room.title}</h3>
                    <p className="mt-2 text-chalk-muted">{room.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ---- Gallery ---- */}
        <section className="container-x py-12 sm:py-16">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4 text-bubble">Eindrücke</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Der Space.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {office.gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 3) * 0.06}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-600 ${
                  i % 4 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <SmartImg src={src} alt="Creative Space" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---- Booking form ---- */}
        <OfficeBooking />

        {/* ---- Location ---- */}
        <section className="container-x py-12 pb-24 sm:pb-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow mb-4 text-bubble">
                <Pin className="h-4 w-4" />
                Standort
              </p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                {office.location}.
              </h2>
              <p className="mt-5 text-lg text-chalk-muted">{office.address}</p>
              <p className="mt-2 text-chalk-muted">Nur wenige Minuten von Linz entfernt.</p>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-chalk transition-colors hover:border-bubble/50 hover:text-bubble"
              >
                Route planen
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
                <iframe
                  title="Standort SAX Creative Space"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapsQuery)}&output=embed`}
                  className="h-full w-full grayscale-[30%]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
