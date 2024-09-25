import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        skModernBold: ["var(--font-sk-modern-bold)", "sans-serif"],
        skModernRegular: ["var(--font-sk-modern-regular)", "sans-serif"],
        skModernLight: ["var(--font-sk-modern-light)", "sans-serif"],
      },
      colors: {
        cream: "#FFFDD0", // Add your desired cream color hex code
        green: {
          50: "#f1ffee",
          100: "#dbffd7",
          200: "#b8ffb1",
          300: "#7fff74",
          400: "#42f731",
          500: "#17e106",
          600: "#10bb00",
          700: "#0fa203",
          800: "#0f7308",
          900: "#0d5e09",
          950: "#033500",
        },
      },
    },
  },
  plugins: [],
};
export default config;
