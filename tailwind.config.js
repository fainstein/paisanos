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
      white: "#FCFCFD",
      "light-gray": "#777E90",
      gray: "#353945",
      "dark-gray": "#23262F",
      black: "#141416",
      green: "#45B36B",
      blue: "#3772FF",
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
