import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Datenschutz — SAX-Events",
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 sm:pt-40">
        <section className="container-x pb-24 sm:pb-32">
          <h1 className="font-display text-5xl uppercase tracking-tight sm:text-6xl">
            Datenschutz
          </h1>

          <div className="mt-10 max-w-2xl space-y-8 leading-relaxed text-chalk-muted">
            <p>
              Der Schutz deiner persönlichen Daten ist uns wichtig. Wir
              verarbeiten deine Daten ausschließlich auf Grundlage der
              gesetzlichen Bestimmungen (DSGVO, TKG).
            </p>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Verantwortlich
              </h2>
              <p className="mt-3">
                {site.contact.owner}, {site.contact.address}
                <br />
                {site.contact.email}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Kontaktaufnahme
              </h2>
              <p className="mt-3">
                Wenn du uns per Formular, E-Mail oder WhatsApp kontaktierst,
                werden deine Angaben zur Bearbeitung der Anfrage gespeichert. Das
                Anfrageformular öffnet dein eigenes E-Mail-Programm — es werden
                dabei keine Daten auf der Website selbst gespeichert. Wir geben
                diese Daten nicht ohne deine Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Externe Links &amp; Social Media
              </h2>
              <p className="mt-3">
                Unsere Seite verlinkt auf externe Dienste (z.B. Instagram,
                WhatsApp). Beim Besuch dieser Dienste gelten deren
                Datenschutzbestimmungen. Auf deren Inhalte und Datenverarbeitung
                haben wir keinen Einfluss.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl uppercase tracking-tight text-chalk">
                Deine Rechte
              </h2>
              <p className="mt-3">
                Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
                Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu.
                Wende dich dazu an {site.contact.email}.
              </p>
            </div>

            <p className="text-sm text-chalk-dim">
              Hinweis: Diese Datenschutzerklärung ist eine Grundlage und sollte
              vor Veröffentlichung rechtlich geprüft werden — insbesondere wenn
              später Tracking, Analytics oder eingebettete Feeds ergänzt werden.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
