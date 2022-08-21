/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#222222',
        'red': '#F40051',
        'yellow': '#F7D337',
        'GRAY-LIGHT': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      },
    },
  },
  plugins: [],
}

