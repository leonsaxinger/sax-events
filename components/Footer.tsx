import { navLinks, site } from "@/data/site";
import { Instagram, WhatsApp, Mail, ArrowRight } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const waLink = `https://wa.me/${site.contact.whatsapp}`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-800">
      {/* Statement row — giant outlined wordmark, editorial sign-off */}
      <div className="container-x pt-16 sm:pt-20">
        <a href="/" aria-label="SAX-Events Startseite" className="group block cursor-pointer">
          <span
            className="block whitespace-nowrap font-display text-[13.5vw] uppercase leading-[0.85] tracking-tight text-transparent transition-colors duration-500 group-hover:text-accent sm:text-[9.5rem] lg:text-[12rem]"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}
          >
            SAX·Events
          </span>
        </a>
        <p className="mt-4 font-display text-sm uppercase tracking-[0.3em] text-chalk-dim">
          {site.tagline}
        </p>
      </div>

      <div className="container-x mt-14 grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Contact */}
        <div className="space-y-3 text-sm text-chalk-muted">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-chalk-dim">Kontakt</p>
          <a href={`mailto:${site.contact.email}`} className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-accent">
            <Mail className="h-4 w-4 text-accent" />
            {site.contact.email}
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center gap-2.5 transition-colors hover:text-accent">
            <WhatsApp className="h-4 w-4 text-accent" />
            {site.contact.phone}
          </a>
          <p className="pt-1 text-chalk-dim">{site.contact.address}</p>
        </div>

        {/* Nav */}
        <nav className="space-y-3 text-sm">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-chalk-dim">Seiten</p>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block cursor-pointer font-medium text-chalk-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social / CTA */}
        <div className="space-y-3 text-sm">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-chalk-dim">Folge uns</p>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex cursor-pointer items-center gap-2.5 font-medium text-chalk-muted transition-colors hover:text-accent"
          >
            <Instagram className="h-4 w-4 text-accent" />
            @{site.instagramHandle}
            <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
          </a>
          <p className="max-w-xs pt-1 text-chalk-dim">
            Jede Nacht, jeder Moment, jede Crowd — live auf Instagram.
          </p>
        </div>
      </div>

      <div className="container-x">
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-chalk-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="/impressum" className="cursor-pointer transition-colors hover:text-chalk">
              Impressum
            </a>
            <a href="/datenschutz" className="cursor-pointer transition-colors hover:text-chalk">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
