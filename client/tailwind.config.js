/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    screens: {
      md: '900px',
    },
    colors: {
      'background-color': 'var(--background)',
      'text-color': 'var(--text-color)',
      'accent-color': 'var(--accent-color)',
      'tooltip-background': 'rgb(6, 111, 197)',
    },
    borderWidth: {
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
    },
    fontSize: {
      '1.2rem': '1.2rem',
      '1.5rem': '1.5rem',
      '2rem': '2rem',
    },
    transitionDuration: {
      '0.2s': '0.2s',
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
