/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F4F0",
        primary:    "#1C1917",
        secondary:  "#78716C",
        accent:     "#D4B896",
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono:  ["JetBrains Mono", "Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};
