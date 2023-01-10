/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "desktop-md": "990px",
      },
      colors: {
        customBlue: "#004de1",
        primaryBlue: "#23395d",
        'appcolor': {
          '50': '#f4f5f7',
          '100': '#e9ebef',
          '200': '#c8ced7',
          '300': '#a7b0be',
          '400': '#65748e',
          '500': '#23395d',
          '600': '#203354',
          '700': '#1a2b46',
          '800': '#152238',
          '900': '#111c2e',
      },
    },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
