import { Anton, Space_Grotesk } from "next/font/google";

// Display face — loud, condensed, high-impact. Built for shouty party
// headlines like "NEXT GENERATION PARTYING". Single weight (400) by design.
export const display = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

// Body face — Space Grotesk: distinctive geometric grotesk with real
// personality (matches the party energy) while staying very legible.
export const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
