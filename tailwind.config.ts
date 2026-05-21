import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#00e87a",
          dim: "rgba(0,232,122,0.12)",
          glow: "rgba(0,232,122,0.25)",
        },
        navy: {
          DEFAULT: "#080c18",
          light: "#0c1122",
        },
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "spin-slow": "spin 22s linear infinite",
        "spin-reverse-slow": "spin 16s linear infinite reverse",
        blink: "blink 2.4s ease-in-out infinite",
        "fade-up": "fadeUp 0.5s ease both",
        "count-up": "countUp 1s ease both",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
        },
        blink: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.4)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,232,122,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,232,122,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};

export default config;
