/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/dp_button/dist/components/**/*.js"
  ],

  theme: {
    extend: {},
    colors:{
      'primary-clr':'#C9252C',
      'secondary-clr':'#FFBC00',
      'bg-clr':'#F7F7FA',
      'bg-white':'#FFFFFF'
    }
  },
  plugins: [],
}

