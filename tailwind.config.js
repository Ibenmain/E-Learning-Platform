/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

module.exports = {
  content: {
    files: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    extract
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    fluid
  ],
  darkMode: 'class',
};
