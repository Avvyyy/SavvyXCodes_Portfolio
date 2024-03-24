const { addDynamicIconSelectors } = require('@iconify/tailwind');

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
      },
      backgroundImage: {
        'aboutMeBackground': "url('./assets/aboutMe.jpg')",
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}