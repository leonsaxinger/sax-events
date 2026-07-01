"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import {
  Mail,
  Phone,
  Pin,
  WhatsApp,
  Instagram,
  TikTok,
  YouTube,
  Facebook,
  Check,
  ArrowRight,
} from "./Icons";

const waLink = `https://wa.me/${site.contact.whatsapp}`;

const socialLinks = [
  { key: "instagram", label: "Instagram", Icon: Instagram, url: site.socials.instagram },
  { key: "tiktok", label: "TikTok", Icon: TikTok, url: site.socials.tiktok },
  { key: "youtube", label: "YouTube", Icon: YouTube, url: site.socials.youtube },
  { key: "facebook", label: "Facebook", Icon: Facebook, url: site.socials.facebook },
].filter(
  (s) =>
    s.url &&
    s.url.trim() !== "" &&
    s.url !== "https://instagram.com/" &&
    s.url !== "https://tiktok.com/"
);

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-chalk placeholder:text-chalk-dim transition-colors duration-200 focus:border-accent focus:bg-white/[0.06] focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // TODO: Für echtes Server-Handling an eine API-Route / Formspree / Resend POSTen.
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const eventType = String(data.get("eventType") || "");
    const date = String(data.get("date") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Anfrage von ${name} — ${eventType || "Event"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone}`,
        `Art des Events: ${eventType}`,
        `Wunschdatum: ${date}`,
        "",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="kontakt" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-0">
        <div
          className="absolute right-0 top-0 h-96 w-96"
          style={{ background: "radial-gradient(circle, rgba(224,33,138,0.18), transparent 70%)" }}
        />
      </div>

      <div className="container-x relative z-10 grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: pitch + plain contact lines + socials */}
        <Reveal>
          <p className="eyebrow mb-4">Kontakt</p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Lass uns deine Nacht{" "}
            <span className="text-accent">unvergesslich</span> machen.
          </h2>
          <p className="mt-5 max-w-md text-lg text-chalk-muted">
            Erzähl uns kurz, was du planst — wir melden uns schnell mit einem
            passenden Vorschlag.
          </p>

          <Magnetic className="mt-9">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
            >
              <WhatsApp className="h-5 w-5" />
              Direkt per WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnetic>

          {/* Plain contact rows — no boxes */}
          <div className="mt-10 space-y-4 text-chalk-muted">
            <a href={`mailto:${site.contact.email}`} className="flex cursor-pointer items-center gap-3 transition-colors hover:text-accent">
              <Mail className="h-5 w-5 text-accent" />
              {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="flex cursor-pointer items-center gap-3 transition-colors hover:text-accent">
              <Phone className="h-5 w-5 text-accent" />
              {site.contact.phone}
            </a>
            <p className="flex items-center gap-3">
              <Pin className="h-5 w-5 text-accent" />
              {site.contact.region}
            </p>
          </div>

          {socialLinks.length > 0 && (
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map(({ key, label, Icon, url }) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-chalk-muted transition-all duration-200 hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </Reveal>

        {/* Right: single form panel */}
        <Reveal delay={0.1}>
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-glow">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">Fast geschafft!</h3>
              <p className="mt-3 max-w-xs text-chalk-muted">
                Dein E-Mail-Programm öffnet sich mit der fertigen Anfrage.
                Einfach abschicken — wir melden uns.
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
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-chalk-muted">
                    Name *
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Dein Name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-chalk-muted">
                    E-Mail *
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="name@beispiel.de" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-chalk-muted">
                    Telefon
                  </label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="eventType" className="mb-2 block text-sm font-medium text-chalk-muted">
                    Art des Events
                  </label>
                  <select id="eventType" name="eventType" className={inputClass} defaultValue="">
                    <option value="" disabled>Bitte wählen</option>
                    <option>FREAKY</option>
                    <option>Clubnight</option>
                    <option>Festival</option>
                    <option>Firmenfeier</option>
                    <option>Eigenes Konzept</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-medium text-chalk-muted">
                  Wunschdatum
                </label>
                <input id="date" name="date" type="date" className={`${inputClass} [color-scheme:dark]`} />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-chalk-muted">
                  Nachricht *
                </label>
                <textarea id="message" name="message" required rows={4} placeholder="Erzähl uns von deinem Event …" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
              >
                Anfrage senden
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-chalk-dim">
                Mit dem Absenden stimmst du der Verarbeitung deiner Daten zur
                Bearbeitung der Anfrage zu.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
