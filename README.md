# SAX-Events — Website

Premium Event-Website (Next.js 14 · TypeScript · Tailwind CSS · Framer Motion).
Dunkles, stylisches Design in Schwarz/Weiß mit Deep-Magenta-Akzent, performante
Animationen und voll responsiv.

## Schnellstart

```bash
npm install      # einmalig: Pakete installieren
npm run dev      # Entwicklungsserver -> http://localhost:3000
```

Für die Produktion:

```bash
npm run build
npm run start
```

## Wo trage ich meine Inhalte ein?

**Alles Textliche & Kontaktdaten:** `data/site.ts`
Dort sind alle Texte, die E-Mail, Telefon, **WhatsApp-Nummer** und Social-Links
zentral hinterlegt. Suche nach `TODO` und ersetze die Platzhalter.

> WhatsApp-Nummer: internationales Format **ohne** „+", Leerzeichen oder Striche.
> Beispiel: `+49 151 12345678` → `"4915112345678"`

## Wo lege ich Logo, Videos und Fotos ab?

| Was | Ordner | Datei(en) |
|-----|--------|-----------|
| Logo | `public/logo/` | `sax-events-logo.png` |
| Hero-Hintergrundvideo | `public/videos/` | `hero.mp4` |
| Showreel-Video | `public/videos/` | `showreel.mp4` |
| Video-Standbilder | `public/images/` | `hero-poster.jpg`, `showreel-poster.jpg` |
| Galerie-Fotos | `public/images/gallery/` | `01.jpg` … `06.jpg` |

In jedem Ordner liegt eine `README.txt` mit Detail-Empfehlungen (Größe/Format).
**Bevor die echten Dateien da sind, sieht die Seite trotzdem fertig aus** —
es greifen automatisch saubere Platzhalter (Verläufe, Schriftzug, „Foto folgt").

## Anfrageformular

Standardmäßig öffnet das Formular das E-Mail-Programm des Besuchers mit einer
fertig ausgefüllten Anfrage an eure Adresse (funktioniert sofort, ohne Server).
Für echtes serverseitiges Versenden (z. B. Formspree, Resend oder eine eigene
API-Route) gibt es in `components/Contact.tsx` einen markierten `TODO`-Punkt.

## Weitere Event-Seiten

- Die **FREAKY**-Seite existiert als On-Brand „Coming Soon"-Seite unter
  `app/events/freaky/page.tsx`.
- Neue Events: einfach einen weiteren Ordner unter `app/events/<name>/` anlegen
  und in `data/site.ts` bei `events` ergänzen.

## Deployment (empfohlen: Vercel)

1. Repo zu GitHub pushen.
2. Auf [vercel.com](https://vercel.com) importieren → erkennt Next.js automatisch.
3. Deploy. Eigene Domain in den Vercel-Projekteinstellungen verbinden.

## Design-Eckdaten

- **Schrift:** Syne (Headlines) + Manrope (Fließtext), via `next/font` (kein Layout-Shift)
- **Farben:** `#0A0A0B` (Schwarz), `#FAFAFA` (Weiß), `#E0218A` (Magenta) — in `tailwind.config.ts`
- **Barrierefreiheit:** Fokus-Ringe, `prefers-reduced-motion`, semantisches HTML, ausreichende Kontraste
- **Performance:** Animationen nur über `transform`/`opacity`, Lazy-Loading, Video erst auf Klick
```
