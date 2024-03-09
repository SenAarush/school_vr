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
      backgroundImage: {
        'bag': `url('/bag.png')`,
        'bg1': `url('/bg1.png')`,
        'pattern': `url('/pattern.png')`,
        'infinity': `url('/Vector.png')`,
        'rect': `url('/rect.png')`,
        'rect-white': `url('/rect_white.png')`,
        'hero': `url('/hero.png')`,
        'outline': `url('/vec_outline.png')`
      },
    },
  },
  plugins: [],
}

