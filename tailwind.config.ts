/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'


const config = {
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
      boxShadow: {
        custom: '0px 0px 15px 0px #0000001A',
      },
    },
  },
  plugins: [
    fluid
  ],
  darkMode: 'class',
} as Config;

export default config