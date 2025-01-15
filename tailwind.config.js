/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0f0716",
        secondary: "#b5b0ba",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
