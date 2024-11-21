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
        bg2: '#FFFFFF',
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
        appear: 'appear 0.2s ease',
      },
      keyframes: {
        skeleton: {
          '0%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '-100% center' },
        },
        appear : {
          '0%': { opacity: 0, scale: 0, },
          '100%': { opacity: 1, scale: 1, },
        },
      },
    },
  },
  plugins: [],
}
