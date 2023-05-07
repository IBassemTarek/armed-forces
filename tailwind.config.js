/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFA",
        secondary: {
          100: "#AEAEAE",
          200: "#D9D9D9",
          300: "#E8EAEF",
          400: "#F2F4F8",
        },
        tertiary: {
          100: "#260E0E",
        },
        success: "#2C9930",
        error: "#FF4141",
        warning: "#A19344",
      },
    },
  },
  plugins: [],
};
