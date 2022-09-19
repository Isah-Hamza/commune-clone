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
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
