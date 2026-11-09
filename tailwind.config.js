/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E5C882',
          DEFAULT: '#C5A059',
          dark: '#A68037',
          hover: '#B89246',
        },
        slate: {
          850: '#151d2f',
          950: '#070b12',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
        'gold-glow-lg': '0 0 35px -5px rgba(197, 160, 89, 0.4)',
      }
    },
  },
  plugins: [],
};

