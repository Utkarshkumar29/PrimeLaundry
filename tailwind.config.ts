import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--navy)",
          mid: "var(--navy-mid)",
          light: "var(--navy-light)",
        },
        teal: {
          DEFAULT: "var(--teal)",
          dark: "var(--teal-dark)",
          glow: "var(--teal-glow)",
        },
        "off-white": "var(--off-white)",
        "gray-light": "var(--gray-light)",
        "gray-mid": "var(--gray-mid)",
        "gray-dark": "var(--gray-dark)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        teal: "0 0 40px rgba(0, 229, 200, 0.2), 0 0 80px rgba(0, 229, 200, 0.08)",
        "teal-sm": "0 0 20px rgba(0, 229, 200, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;