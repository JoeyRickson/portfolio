/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        'mono-tech': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'text-fade': 'fade 0.3s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}