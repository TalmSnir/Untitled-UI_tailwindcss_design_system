const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
        secondary: colors.slate,
        info: colors.cyan,
        danger: colors.rose,
        success: colors.green,
        warning: colors.amber,
      },
    },
  },
  plugins: [],
};
