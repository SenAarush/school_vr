/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      primary: '#ECC243',
      secondary: '#646464',
      tertiary: '#EDEDED'
    },
    extend: {
      animation: {
        'move-up-down': 'moveUpDown 5s infinite ease-in-out',
      },
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

