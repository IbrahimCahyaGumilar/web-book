/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#caa472 ',
        secon: '#f9f5f0',
      },
    },
    
    fontFamily: {
      logo: ['Caveat'],
      navbar: ['Oswald'],
    },
  },
  plugins: [],
}
