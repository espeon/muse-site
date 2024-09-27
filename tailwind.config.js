import { createPreset } from "fumadocs-ui/tailwind-plugin";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  presets: [
    createPreset({
      preset: "catppuccin",
    }),
  ],
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        wisteria: {
          50: "oklch(0.955 0.012 314.384)",
          100: "oklch(0.910 0.55 314.384)",
          200: "oklch(0.820 0.100 314.384)",
          300: "oklch(0.730 0.105 314.384)",
          400: "oklch(0.640 0.120 314.384)",
          500: "oklch(0.550 0.100 314.384)",
          600: "oklch(0.445 0.084 314.384)",
          700: "oklch(0.334 0.081 314.384)",
          800: "oklch(0.223 0.078 314.384)",
          900: "oklch(0.111 0.076 314.384)",
          950: "oklch(0.056 0.074 314.384)",
        },
      },
      fontFamily: {
        sans: ["var(--font-figtree)"],
        mono: ["var(--font-ibm-plex-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
