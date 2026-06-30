import { jars, jarsIntro } from "@/data/site";
import Reveal from "./Reveal";
import EventJarCard from "./EventJarCard";

export default function EventsJar() {
  return (
    <section id="konzepte" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4 text-bubble">{jarsIntro.eyebrow}</p>
          <h2 className="font-display text-5xl uppercase leading-[0.9] tracking-tight sm:text-7xl">
            Fertige <span className="text-bubble">Konzepte.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-chalk-muted">
            {jarsIntro.body}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {jars.map((jar, i) => (
            <Reveal key={jar.name} delay={i * 0.1}>
              <EventJarCard jar={jar} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
