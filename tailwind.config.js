const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "var(--color-white)",
      "light-gray": "var(--color-light-gray)",
      gray: "var(--color-gray)",
      "dark-gray": "var(--color-dark-gray)",
      black: "var(--color-black)",
      green: "var(--color-green)",
      blue: "var(--color-blue)",
      "cardet-blue": "var(--color-cardet-blue)",
      pink: "var(--color-pink)",
      purple: "var(--color-purple)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...fontFamily.sans],
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
