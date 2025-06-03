/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'divine-gold': '#D4AF37',
        'peace-blue': '#4A90E2',
        'unity-purple': '#8B5CF6',
        'love-rose': '#F472B6',
        'earth-green': '#10B981'
      },
      fontFamily: {
        'spiritual': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

