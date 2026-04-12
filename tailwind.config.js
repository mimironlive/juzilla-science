/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        juz: {
          purple:       '#8636CE',
          'purple-dark':'#5E1FA8',
          'purple-mid': '#A855F7',
          'purple-light':'#EDE0FF',
          'purple-bg':  '#F5F0FF',
          pink:         '#FF82BD',
          'pink-light': '#FFF0F8',
          teal:         '#ADD5D5',
          'teal-light': '#E8F7F7',
          orange:       '#F78B64',
          'orange-light':'#FFF3EE',
          yellow:       '#FFD93D',
          'yellow-light':'#FFFBEB',
          green:        '#6BCB77',
          'green-light':'#F0FDF4',
          red:          '#FF6B6B',
          'red-light':  '#FFF5F5',
          navy:         '#2D1B69',
          'card':       '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(134, 54, 206, 0.08)',
        'card-hover': '0 8px 30px rgba(134, 54, 206, 0.15)',
        'glow-purple': '0 0 20px rgba(134, 54, 206, 0.3)',
      },
    },
  },
  plugins: [],
}
