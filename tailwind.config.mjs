/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Terminal palette — Bloomberg/TradingView-influenced, deep slate-navy
        bg: { 0: "#0a0e15", 1: "#0d121b", 2: "#111824", 3: "#16202e" },
        line: { DEFAULT: "#1d2735", 2: "#283546", 3: "#36475d" },
        tx: { 0: "#e8eef6", 1: "#a3b2c4", 2: "#8a98a8", 3: "#7c8a99" },
        // Market accents (static)
        up: "oklch(0.74 0.115 158)",
        down: "oklch(0.67 0.125 25)",
        amberx: "oklch(0.78 0.10 78)",
        info: "oklch(0.72 0.085 235)",

        // Legacy aliases — original hex, kept valid until every component is reskinned
        background: "#0a0a0a",
        surface: { DEFAULT: "#141414", light: "#1a1a1a", border: "#262626" },
        text: { primary: "#fafafa", secondary: "#a1a1aa", muted: "#71717a" },
        accent: { DEFAULT: "#3b82f6", cyan: "#22d3ee", purple: "#a855f7" },
      },
      fontFamily: {
        sans: ['"Geist Sans"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: { xs: "3px", sm: "5px", DEFAULT: "7px", lg: "11px" },
      maxWidth: { wrap: "1200px" },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
