import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F1ECE2",
        paper: "#EAE3D6",
        ink: "#15140F",
        ash: "#3A372F",
        muted: "#7A7264",
        rule: "#CFC7B6",
        sienna: "#B0501C",
        ember: "#D8722C",
        moss: "#3F4A2E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        sans: ["var(--font-body)", "Instrument Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
