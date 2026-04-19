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
        blue: {
          DEFAULT: "var(--blue)",
          dark: "var(--blue-dark)",
          light: "var(--blue-light)",
        },
        green: {
          DEFAULT: "var(--green)",
          dark: "var(--green-dark)",
          light: "var(--green-light)",
        },
        // Keep aliases
        navy: {
          DEFAULT: "var(--blue)",
          mid: "var(--blue-dark)",
          light: "#1a6bbf",
        },
        teal: {
          DEFAULT: "var(--green)",
          dark: "var(--green-dark)",
        },
        cream: "var(--bg-cream)",
        "off-white": "var(--bg-cream)",
        "gray-light": "var(--border-light)",
        "gray-mid": "var(--text-light)",
        "gray-dark": "var(--text-mid)",
        "text-dark": "var(--text-dark)",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        green: "0 0 30px rgba(68,178,76,0.3), 0 4px 15px rgba(68,178,76,0.2)",
        "green-sm": "0 2px 12px rgba(68,178,76,0.25)",
        card: "0 2px 20px rgba(0,0,0,0.06)",
        "card-md": "0 4px 30px rgba(0,0,0,0.1)",
        teal: "0 0 30px rgba(68,178,76,0.3)",
        "teal-sm": "0 2px 12px rgba(68,178,76,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;