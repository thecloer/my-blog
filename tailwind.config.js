/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minHeight: {
        20: '5rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.xl'),
              maxHeight: '26rem',
              margin: '1.5rem auto',
            },
            'p code': {
              borderRadius: theme('borderRadius.md'),
              backgroundColor: theme('colors.slate.300'),
              padding: `${theme('spacing.[0.5]')} ${theme('spacing.1')}`,
            },
            'p code::after, p code::before': {
              content: theme('content.none'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
