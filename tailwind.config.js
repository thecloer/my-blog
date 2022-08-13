/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        20: '5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
