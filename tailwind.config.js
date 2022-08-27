/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        dropdown: 'dropdown 250ms ease-in-out forwards',
      },
      minHeight: {
        20: '5rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            img: {
              borderRadius: theme('borderRadius.xl'),
              margin: '1rem auto 1.5rem',
            },
            code: {
              borderRadius: theme('borderRadius.md'),
              backgroundColor: theme('colors.slate.300'),
              padding: `${theme('spacing.[0.5]')} ${theme('spacing.1')}`,
            },
            'code::before, code::after': {
              content: theme('content.none'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
