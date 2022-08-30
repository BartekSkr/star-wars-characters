/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      md: '900px',
    },
    colors: {
      'default-color': 'rgb(255, 255, 0)',
      black: 'black',
    },
    borderWidth: {
      3: '3px',
      4: '4px',
    },
    fontSize: {
      '2rem': '2rem',
      larger: '1.2rem',
    },
  },
  plugins: [],
};
