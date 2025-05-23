/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#5F1F76',
        // secondary:''
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

}

