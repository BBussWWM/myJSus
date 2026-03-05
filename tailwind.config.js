/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bible-red': '#8B0000',
        'bible-gold': '#D4AF37',
        'bible-parchment': '#F5F5DC',
        'bible-dark': '#1a1a1a',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
