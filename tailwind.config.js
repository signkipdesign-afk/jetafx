/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFB800",
          "yellow-hover": "#E6A600",
          dark: "#080c14",
          card: "rgba(14, 21, 37, 0.7)",
          cardBorder: "rgba(40, 56, 89, 0.45)",
          cardInner: "rgba(18, 27, 46, 0.85)",
          cyanAccent: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
