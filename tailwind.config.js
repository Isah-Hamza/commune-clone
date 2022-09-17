/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customBlue:"#004de1"
      },
      fontFamily:{
        "inter":['Inter', 'ui-sans-serif']
      }
    },
  },
  plugins: [],
};
