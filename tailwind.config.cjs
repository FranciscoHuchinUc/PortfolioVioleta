/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      },
      colors: {
        'primary': '#0F6BAC',
        'secondary': '#094068',
        'tertiary ': '#F8FCFE',
        'black': '#222222',
        'hover': '#666666',
        'shadow': '#F2F2F2'
      }
    }
  },
  plugins: [],
}
