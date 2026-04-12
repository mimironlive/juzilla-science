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
        brand: {
          purple: '#7C3AED',
          'purple-dark': '#5B21B6',
          'purple-light': '#EDE9FE',
          'purple-bg': '#F5F3FF',
          green: '#65A30D',
          'green-light': '#ECFCCB',
          amber: '#D97706',
          'amber-light': '#FEF3C7',
          navy: '#1E1B4B',
          red: '#DC2626',
          'red-light': '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
