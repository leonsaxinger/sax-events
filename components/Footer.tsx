import { navLinks, site } from "@/data/site";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-800">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-chalk-muted">{site.tagline}</p>
            <p className="mt-4 text-sm text-chalk-dim">
              {site.contact.address}
              <br />
              <a href={`mailto:${site.contact.email}`} className="cursor-pointer transition-colors hover:text-accent">
                {site.contact.email}
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm font-medium text-chalk-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-chalk-dim sm:flex-row sm:items-center sm:justify-between">
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
