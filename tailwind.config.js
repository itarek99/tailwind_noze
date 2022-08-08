/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      padding: '0.8rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        primary: '#654a9b',
        primaryLite: '#B9B0E4',
        primaryDark: '#210545',
        secondary: '#6B5A78',
      },
      fontSize: {
        md: '15px',
      },
    },
  },
  plugins: [],
};
