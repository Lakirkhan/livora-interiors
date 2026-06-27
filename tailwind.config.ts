import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9f0",
          100: "#faf0d7",
          200: "#f5dfa0",
          300: "#efc86a",
          400: "#e8b43e",
          500: "#d4a017",
          600: "#b8880f",
          700: "#8a6510",
          800: "#6b4f14",
          900: "#563f14",
        },
        cream: "#faf8f4",
        charcoal: "#1a1a1a",
        "warm-black": "#0d0d0d",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d4a017 0%, #f5dfa0 50%, #d4a017 100%)",
        "dark-gradient": "linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
