/** @type {import('tailwindcss').Config} */

module.exports = ({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    screens:{
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    
    extend: {
      colors: {
        primary: "#0D0D0D",
        secundary: "#F2B705",
        orange900: "#D95204",
        orange700: "#F27405",
        orange400: "#F29F05",
      },

      fontFamily:{
        'beba': ['Bebas Neue']
      },
      backgroundImage: {
        'hero': "url('/src/assets/b-1.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
});
