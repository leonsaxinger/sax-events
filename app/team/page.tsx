import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Team — SAX-Events",
  description: "Die Menschen hinter SAX-Events.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <section className="container-x pb-24 sm:pb-32">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4 text-acid">Die Crew</p>
            <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl">
              Das <span className="text-acid">Team.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk-muted">
              Hinter jedem Glas steckt eine Crew aus Animateuren, Showacts,
              Technik und Organisation. Die Team-Seite mit allen Köpfen folgt in
              Kürze.
            </p>
          </Reveal>

          {/* TODO: echte Team-Fotos + Namen/Rollen ergänzen */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {["Animation", "Show & Stage", "Technik", "Booking", "Social & Media", "Organisation"].map(
              (role, i) => (
                <Reveal
                  key={role}
                  delay={(i % 3) * 0.08}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/p-uni-${(i % 6) + 1}.jpg`}
                    alt=""
                    className="h-full w-full object-cover opacity-50 grayscale transition-all duration-500 hover:opacity-70 hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-acid">{role}</p>
                    <p className="mt-1 font-display text-xl uppercase tracking-tight text-chalk/80">
                      Bald hier
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>

          <Reveal delay={0.2} className="mt-14">
            <a
              href="/#kontakt"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright"
            >
              Teil der Crew werden
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
