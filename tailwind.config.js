/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {},
    extend: {
      minHeight: {
        20: '5rem',
      },
    },
  },
  plugins: [],
};
