/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

const tailwindConfig = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 0px 15px 0px #0000001A',
      },
    },
  },
  plugins: [fluid({
    checkSC144: false,
  }),],
  darkMode: 'class',
};

export default tailwindConfig;
