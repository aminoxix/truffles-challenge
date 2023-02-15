/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '376px',
      'sd': '390px',
      'md': '640px',
      'lg': '1025px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        brand: "#8553FB",
        accent: "#F5F5F5",
      },
      fontFamily: {
        inter: [ "Inter" ]
      }
    },
  },
    plugins: []
};
