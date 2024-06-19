/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        md:'5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

