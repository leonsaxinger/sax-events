"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { WhatsApp, Check, ArrowRight, Calendar } from "./Icons";

const waLink = `https://wa.me/${site.contact.whatsapp}`;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-chalk placeholder:text-chalk-dim transition-colors duration-200 focus:border-accent focus:bg-white/[0.06] focus:outline-none";

export default function OfficeBooking() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const date = String(data.get("date") || "");
    const purpose = String(data.get("purpose") || "");
    const people = String(data.get("people") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Space-Anfrage: ${purpose || "Creative Space"} — ${date || ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone}`,
        `Wunschtermin: ${date}`,
        `Zweck: ${purpose}`,
        `Personen: ${people}`,
        "",
        message,
      ].join("\n")
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="anfrage" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96"
        style={{ background: "radial-gradient(circle, rgba(224,33,138,0.16), transparent 70%)" }}
      />

      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4 text-accent">
            <Calendar className="h-4 w-4" />
            Verfügbarkeit anfragen
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Sichere dir deinen <span className="text-accent">Termin.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg text-chalk-muted">
            Trag deinen Wunschtermin ein — wir melden uns mit Verfügbarkeit und
            Angebot. Schneller geht&apos;s per WhatsApp.
          </p>

          <Magnetic className="mt-9">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
            >
              <WhatsApp className="h-5 w-5" />
              Per WhatsApp anfragen
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnetic>

          <p className="mt-8 text-chalk-muted">
            Oder direkt:{" "}
            <a href={`mailto:${site.contact.email}`} className="cursor-pointer text-accent hover:text-accent-bright">
              {site.contact.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-glow">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-2xl uppercase tracking-tight">Fast geschafft!</h3>
              <p className="mt-3 max-w-xs text-chalk-muted">
                Dein E-Mail-Programm öffnet sich mit der fertigen Anfrage.
                Abschicken — wir bestätigen die Verfügbarkeit.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 cursor-pointer text-sm font-semibold text-accent hover:text-accent-bright"
              >
                Neue Anfrage
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="o-name" className="mb-2 block text-sm font-medium text-chalk-muted">Name *</label>
                  <input id="o-name" name="name" type="text" required autoComplete="name" placeholder="Dein Name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="o-email" className="mb-2 block text-sm font-medium text-chalk-muted">E-Mail *</label>
                  <input id="o-email" name="email" type="email" required autoComplete="email" placeholder="name@beispiel.at" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="o-date" className="mb-2 block text-sm font-medium text-chalk-muted">Wunschtermin *</label>
                  <input id="o-date" name="date" type="date" required className={`${inputClass} [color-scheme:dark]`} />
                </div>
                <div>
                  <label htmlFor="o-purpose" className="mb-2 block text-sm font-medium text-chalk-muted">Zweck</label>
                  <select id="o-purpose" name="purpose" className={inputClass} defaultValue="">
                    <option value="" disabled>Bitte wählen</option>
                    <option>Meeting</option>
                    <option>Coworking</option>
                    <option>Workshop</option>
                    <option>Shooting</option>
                    <option>Content Creation</option>
                    <option>Tanz</option>
                    <option>Yoga</option>
                    <option>Proben / Creative Work</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="o-people" className="mb-2 block text-sm font-medium text-chalk-muted">Personen</label>
                  <input id="o-people" name="people" type="number" min="1" placeholder="z.B. 8" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="o-phone" className="mb-2 block text-sm font-medium text-chalk-muted">Telefon</label>
                  <input id="o-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="o-message" className="mb-2 block text-sm font-medium text-chalk-muted">Nachricht</label>
                <textarea id="o-message" name="message" rows={3} placeholder="Was hast du vor?" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
              >
                Anfrage senden
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
