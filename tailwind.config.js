/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070e1b",
          900: "#0c192c",
          800: "#132744",
          700: "#1c385f",
          600: "#274d7e",
          100: "#e0e9f6",
          50: "#f0f5fc",
        },
        paper: {
          50: "#faf9f6",
          100: "#f5f4ef",
          200: "#eceae1",
        },
        accent: {
          rose: "#e11d48",
          hover: "#be123c",
          subtle: "#ffe4e6",
          darkSubtle: "#4c0519",
        },
      },
      fontFamily: {
        display: ["Rokkitt", "serif"],
        serif: ["Literata", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

