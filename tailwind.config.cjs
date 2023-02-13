/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        book: ["AvenirBook", "sans-serif"],
        roman: ["AvenirRoman", "sans-serif"],
        medium: ["AvenirMedium", "sans-serif"],
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
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
