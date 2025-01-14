/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(50, end), blink 1s step-end infinite',
        backInLeft: 'backInLeft 1.5s ease-in-out',
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideUp: 'slideUp 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#40CBCB',
          light: '#6CD9D9',
          dark: '#339A9A',
        },
        secondary: {
          DEFAULT: '#FFBC44',
          light: '#FFCD75',
          dark: '#E6A93D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

