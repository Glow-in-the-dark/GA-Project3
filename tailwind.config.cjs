/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        book: ["Book", "sans-serif"],
        roman: ["Roman", "sans-serif"],
        medium: ["Medium", "sans-serif"],
      },
      colors: {
        primary: "#DB2721",
        secondary: "#FFF1EF",
        greyscale1: "#3C3C3C",
        greyscale2: "#8A8A8A",
        greyscale3: "#FFFFFF",
        selection: "#DB272133",
      },
    },
  },
  plugins: [],
};
