import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Impressum — SAX-Events",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <section className="container-x pb-24 sm:pb-32">
          <h1 className="font-display text-5xl uppercase tracking-tight sm:text-6xl">
            Impressum
          </h1>

          <div className="mt-10 max-w-2xl space-y-8 text-chalk-muted">
            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Medieninhaber &amp; für den Inhalt verantwortlich
              </h2>
              <p className="mt-3 leading-relaxed">
                {site.contact.owner}
                <br />
                {site.contact.address}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Kontakt
              </h2>
              <p className="mt-3 leading-relaxed">
                Telefon:{" "}
                <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="cursor-pointer text-accent hover:text-accent-bright">
                  {site.contact.phone}
                </a>
                <br />
                E-Mail:{" "}
                <a href={`mailto:${site.contact.email}`} className="cursor-pointer text-accent hover:text-accent-bright">
                  {site.contact.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Unternehmensgegenstand
              </h2>
              <p className="mt-3 leading-relaxed">
                Eventagentur — Planung und Durchführung von Veranstaltungen,
                Partyanimation und Entertainment.
              </p>
            </div>

            {/* TODO: Falls vorhanden ergänzen: UID-Nummer, Gewerbeberechtigung,
                Mitgliedschaften (WKO), zuständige Behörde. */}

            <p className="text-sm text-chalk-dim">
              Hinweis: Dieses Impressum ist eine Grundlage und sollte vor
              Veröffentlichung rechtlich geprüft und ggf. um UID, Gewerbeangaben
              etc. ergänzt werden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
