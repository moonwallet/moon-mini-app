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
        plus: '#50AB19',
        minus: '#AD3535',
      },
    },
  },
  plugins: [],
}
