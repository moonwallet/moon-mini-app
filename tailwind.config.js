/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#EFEFF1',
        text: '#000000',
        main: '#8643C8',
        secondary: '#3C3C43',
        warn: '#DF4141',
        plus: '#36D01D',
        minus: '#AD3535',
      },
      fontFamily: {
        'sf': ['SF-Pro'],
        'nu': ['Nunito'],
      },
      animation: {
        skeleton: 'skeleton 1s linear infinite',
      },
      keyframes: {
        skeleton: {
          '0%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '-100% center' },
        },
      },
    },
  },
  plugins: [],
}
