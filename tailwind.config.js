/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        beige: '#F5F0E6',
        brown: '#3C2A21',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
};