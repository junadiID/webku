/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'page/**/*.{html,js}'
  ],
  theme: {

    container: {
      center: true,
      padding:'5px',
    },
     screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '5xl': '2655px',

    },
    extend: {
      colors:{
        primary:'#FFC212'
      },
    },
  },
  plugins: [],
}
