
/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';

module.exports = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
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
