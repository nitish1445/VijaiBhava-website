/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#122040',
          light: '#1a2f5a',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e4c068',
          pale: '#f5e6c0',
        },
        cream: '#faf8f3',
      },
    },
  },
  plugins: [],
}
