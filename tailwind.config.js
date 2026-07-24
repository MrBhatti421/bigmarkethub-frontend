/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',      // orange
        'primary-dark': '#C2410C',
        dark: '#0A0A0A',         // black
        'dark-light': '#1A1A1A',
      },
    },
  },
  plugins: [],
};
