/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#000",
      white: "#fff",
      background: "#040836",
    },
  },
  plugins: [require("daisyui")],
};
