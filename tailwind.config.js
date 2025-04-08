/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      
    },
    extend: {
      animation: {
        gradient: "gradientBG 6s ease infinite",
      },

      keyframes: {
        gradientBG: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
    },
  },
  plugins: [],
}