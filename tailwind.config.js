/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Rethink Sans'
      },
      backgroundImage: {
        'header-bg': "url('/assets/strawberries.webp')"
      },
      colors: {
        'kfk-red': 'rgb(217, 0, 0)',
        black: '#0A0A0A',
        'lucky-yellow': '#ffb200',
        white: '#ffffff',
        platinum: '#e8e8e8'
      }
    }
  },
  plugins: []
}
