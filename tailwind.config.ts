import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Schwarz/Weiß + Deep Magenta
        ink: {
          DEFAULT: "#0A0A0B", // page background (near-black)
          800: "#101012",
          700: "#141416", // raised surfaces
          600: "#1B1B1F", // cards
          500: "#26262B", // borders / hairlines
        },
        accent: {
          DEFAULT: "#E0218A", // Deep Magenta — signature
          bright: "#FF3DA0", // hover / glow
          deep: "#A8155F", // pressed / shadows
        },
        // Hero-palette accents for colourful headings
        acid: "#a3e635", // lime
        bubble: "#e879f9", // fuchsia
        coral: "#fb7185", // rose
        grape: "#a855f7", // purple
        chalk: {
          DEFAULT: "#FAFAFA", // primary text
          muted: "#A1A1AA", // secondary text
          dim: "#71717A", // tertiary text
        },
        // shadcn/ui semantic tokens (mapped onto the brand palette)
        background: "#0A0A0B",
        foreground: "#FAFAFA",
        border: "#26262B",
        input: "#26262B",
        ring: "#E0218A",
        primary: {
          DEFAULT: "#E0218A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1B1B1F",
          foreground: "#FAFAFA",
        },
        muted: {
          DEFAULT: "#1B1B1F",
          foreground: "#A1A1AA",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "80rem", // 1280px
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(224, 33, 138, 0.55)",
        "glow-lg": "0 0 80px -10px rgba(224, 33, 138, 0.5)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
