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
        primary: "#0f172a",      // Deep Navy Blue
        accent: "#06b6d4",       // Vibrant Cyan/Teal
        background: "#ffffff",   // Clean White (or use "background-light" below)
        "background-light": "#f8fafc",  // Very light slate
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        // Or: sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;