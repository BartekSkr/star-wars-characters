/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      md: '900px',
    },
    colors: {
      'default-color': 'rgb(255, 255, 0)',
      'tooltip-background': 'rgb(6, 111, 197)',
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
    inset: {
      'theme-btn-top': '1.8rem',
      'theme-btn-right': '1rem',
      'tooltip-left': '-12rem',
      'tooltip-top': '-40%',
    },
  },
  plugins: [],
};
