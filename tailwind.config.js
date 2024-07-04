/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'black':'#151515',
      'green': '#4EE1A0',
      'black-light': '#242424',
      'gray': '#D9D9D9',
      'white': '#D9D9D9'
    },
    fontFamily: {
      'space': ['Space Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

