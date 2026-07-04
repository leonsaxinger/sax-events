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

// Tailwind can't build class names dynamically — map the department accents.
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
        <section className="container-x pb-20 sm:pb-24">
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

        {/* ============ Departments ============ */}
        {team.departments.map((dep, di) => (
          <section key={dep.no} className="container-x py-14 sm:py-16">
            {/* Department header — same label pattern as the homepage */}
            <Reveal className="flex items-center gap-5 border-t border-white/10 pt-12">
              <span className="ghost-num font-display text-6xl leading-none sm:text-7xl">
                {dep.no}
              </span>
              <div>
                <h2 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-4xl">
                  {dep.name}
                </h2>
                <p className={`mt-2 text-sm font-medium sm:text-base ${accentText[dep.accent]}`}>
                  {dep.blurb}
                </p>
              </div>
            </Reveal>

            {/* Members */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
              {dep.members.map((m, i) => (
                <Reveal key={`${dep.no}-${i}`} delay={(i % 4) * 0.07}>
                  <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink-600">
                    <SmartImg
                      src={m.img}
                      alt={m.name !== "Name folgt" ? m.name : m.role}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                    <span
                      className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accentBar[dep.accent]}`}
                    />
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                      <p className={`text-[0.65rem] uppercase tracking-[0.22em] sm:text-xs ${accentText[dep.accent]}`}>
                        {m.role}
                      </p>
                      <p className="mt-1 font-display text-lg uppercase leading-tight tracking-tight sm:text-xl">
                        {m.name}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        {/* ============ Join CTA ============ */}
        <section className="container-x py-20 sm:py-28">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 to-ink px-8 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2"
              style={{ background: "radial-gradient(ellipse, rgba(163,230,53,0.16), transparent 70%)" }}
            />
            <h2 className="relative font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Du willst auf die <span className="text-acid">Liste?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-chalk-muted">
              Ob Performance, Content oder Organisation — wir suchen immer Leute
              mit Energie. Meld dich.
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
