/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      lightwhite: "#dadada",
      dark: "#000",
      lightdark: "#282c34",
      danger: "#FF0000",
      success: "#00FF00",
    },
  },
  plugins: [require("daisyui")],
};
