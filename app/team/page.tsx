import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SmartImg from "@/components/SmartImg";
import { ArrowRight } from "@/components/Icons";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Team — SAX-Events",
  description:
    "Die Crew hinter SAX-Events: Management, Social Media und Acts & Performers — von jung für jung.",
};

const accentText: Record<string, string> = {
  accent: "text-accent",
  grape: "text-grape",
  coral: "text-coral",
};
const accentBar: Record<string, string> = {
  accent: "bg-accent",
  grape: "bg-grape",
  coral: "bg-coral",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-40">
        {/* ============ Intro ============ */}
        <section className="container-x pb-16 sm:pb-20">
          <Reveal>
            <p className="eyebrow mb-4 text-acid">{team.eyebrow}</p>
            <h1 className="font-display text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl">
              Das <span className="text-acid">Team.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-muted sm:text-xl">
              {team.intro}
            </p>
          </Reveal>
        </section>

        {/* ============ Leads / die Köpfe ============ */}
        <section className="container-x pb-16 sm:pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 to-ink-600 sm:aspect-[5/4] lg:aspect-[4/5]">
                <SmartImg src={team.leadsImg} alt="Leon & Lia" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-4 text-acid">Die Köpfe dahinter</p>
              <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Klein gestartet, groß gedacht.
              </h2>
              <p className="mt-5 leading-relaxed text-chalk-muted">
                Angefangen als Idee, heute eine Marke mit eigener Community. Wir
                bauen SAX-Events Event für Event weiter aus.
              </p>
              <div className="mt-8 space-y-4">
                {team.leads.map((l) => (
                  <div key={l.name} className="flex items-baseline gap-4 border-t border-white/10 pt-4">
                    <span className="font-display text-lg uppercase tracking-tight sm:text-xl">
                      {l.name}
                    </span>
                    <span className="text-sm text-acid">{l.role}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Ganze Crew — Gruppenbild ============ */}
        <section className="relative">
          <div className="container-x">
            <Reveal className="relative overflow-hidden rounded-[2.5rem] border border-white/10">
              <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-ink-700 to-ink-600 sm:aspect-[16/9]">
                <SmartImg src={team.groupImg} alt="Das ganze SAX-Events Team" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                  Die ganze Crew.
                </h2>
                <p className="mt-2 max-w-xl text-sm text-chalk-muted sm:text-base">
                  Management, Content & Performer — das Team, das jeden Event trägt.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ Abteilungen ============ */}
        <section className="container-x py-20 sm:py-28">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4 text-acid">Wie wir aufgestellt sind</p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Drei Bereiche, ein Ziel.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {team.departments.map((dep, i) => (
              <Reveal
                key={dep.no}
                delay={i * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accentBar[dep.accent]}`}
                />
                <span className="ghost-num pointer-events-none absolute -right-1 -top-3 font-display text-[6rem] leading-none">
                  {dep.no}
                </span>
                <span className={`relative font-display text-sm ${accentText[dep.accent]}`}>
                  {dep.no}
                </span>
                <h3 className="relative mt-3 font-display text-2xl uppercase tracking-tight">
                  {dep.name}
                </h3>
                <p className="relative mt-3 leading-relaxed text-chalk-muted">{dep.blurb}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ============ Join CTA ============ */}
        <section className="container-x pb-20 sm:pb-28">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 to-ink px-8 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2"
              style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.16), transparent 70%)" }}
            />
            <h2 className="relative font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Willst du <span className="text-acid">Teil vom Team</span> werden?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-chalk-muted">
              Ob Performance, Content oder Organisation — wir suchen immer Leute
              mit Energie. Meld dich, erzähl uns von dir.
            </p>
            <a
              href="/#kontakt"
              className="group relative mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright"
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
