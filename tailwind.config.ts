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
        // Warm brass accent — used sparingly (eyebrows, hairlines, hover states)
        gold: {
          50: "#f8f2e6",
          100: "#eee0c4",
          200: "#ddc394",
          300: "#c8a56c",
          400: "#af8a52",
          500: "#8e6e3d",
          600: "#725636",
          700: "#5a4429",
          800: "#453422",
          900: "#332619",
        },
        ivory: "#faf6ef",
        linen: "#f1ebe0",
        stone: "#ded1bd",
        taupe: "#8c7f6d",
        charcoal: "#242019",
        "warm-black": "#15120d",
        cream: "#faf6ef",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
