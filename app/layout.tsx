import type { Metadata, Viewport } from "next";
import { display, body } from "@/lib/fonts";
import { site } from "@/data/site";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sax-events.at"),
  title: `${site.name} — ${site.tagline}`,
  description:
    "SAX-Events — fertige Event-Konzepte mit eigener Community. Partyanimation, Schaumpartys & Showacts. Next Generation Partying.",
  keywords: [
    "SAX-Events",
    "Partyanimation",
    "Eventagentur",
    "Schaumparty",
    "FREAKY",
    "Traun",
    "Österreich",
  ],
  openGraph: {
    title: `${site.name} — Next Generation Partying`,
    description:
      "Fertige Event-Konzepte mit eigener Community. Partyanimation, Schaumpartys & Showacts.",
    type: "website",
    locale: "de_AT",
    siteName: "SAX-Events",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Next Generation Partying`,
    description:
      "Fertige Event-Konzepte mit eigener Community. Partyanimation, Schaumpartys & Showacts.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="overflow-x-hidden">
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
