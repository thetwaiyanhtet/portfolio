/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors:{
        primary: "black",
        secondary: "#a855f7",
        tBase: "white",
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
