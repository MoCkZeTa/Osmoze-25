import { Risque } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        risque: ["var(--font-risque)", "cursive"],
        modern: ["'Modern Antiqua'", "cursive"], // Modern Antiqua font
        merriweather: ["'Merriweather'", "serif"], // Merriweather font
      },
    },
  },
  plugins: [],
} satisfies Config;
