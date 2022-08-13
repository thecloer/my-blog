/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        20: '5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.xl'),
              maxHeight: '26rem',
              margin: '1.5rem auto',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
