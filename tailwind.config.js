const { colors, radius } = require('./brand');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors,
      borderRadius: radius,
      boxShadow: {
        card: '0 1px 2px rgba(15,47,68,0.04), 0 8px 24px -12px rgba(15,47,68,0.16)',
        lifted: '0 2px 4px rgba(15,47,68,0.06), 0 20px 40px -16px rgba(15,47,68,0.26)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
