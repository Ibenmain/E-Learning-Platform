const fluid = require('fluid-tailwind').default;
const { extract } = require('fluid-tailwind');

module.exports = {
  content: {
    files: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 0px 15px 0px #0000001A',
      },
    },
  },
  plugins: [
    fluid,
  ],
  darkMode: 'class',
};
