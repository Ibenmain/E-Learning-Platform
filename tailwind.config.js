/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind';

const tailwindConfig = {
  content: {
    files: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [fluid],
  darkMode: 'class',
};

export default tailwindConfig;
