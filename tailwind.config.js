/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-fon': '#020B14',
        'button-color': '#00A1E7'
      }
    }
  },
  plugins: []
}
