/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      dark: "#000",
      primarycolor: "#1fa5ec",
      secondarycolor: "#7380f5",
      grey: "#8B8B8B",
      lightgrey: "#F2F2F2",
    },
  },
  plugins: [require("daisyui")],
};
