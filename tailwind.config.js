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
        customDark: "#283044",
        customBlue: "#42a5f5",
        customGreen: "#7dd49d",
        customBeige: "#BFA89E",
        customBrown: "#8B786D",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
};

