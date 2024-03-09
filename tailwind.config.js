/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'pfBlack': '#03001e',
        'pfPurple': '#7303c0',
        'pfWhite': '#fdeff9',
        'pfPink': '#ec38bc'
      }
    },
  },
  plugins: [],
}