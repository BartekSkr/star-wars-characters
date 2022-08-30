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
      2: '2px',
      3: '3px',
      4: '4px',
    },
    fontSize: {
      larger: '1.2rem',
      '1.5rem': '1.5rem',
      '2rem': '2rem',
    },
    transitionDuration: {
      0.2: '0.2s',
    },
  },
  plugins: [],
};
