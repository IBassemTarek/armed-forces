/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    theme: {
      extend: {
        primary: "#243c5a",
        secondary: {
          100: "#243c5a",
        },
      },
    },
  },
  plugins: [],
};
