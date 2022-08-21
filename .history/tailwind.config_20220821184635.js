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
        'gray-light': '#F5F5F5',
        #B4E1FF'
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif']
      },
    },
  },
  plugins: [],
}

