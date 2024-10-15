/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './**/*.liquid', 
  ],
  content: [
    './**/*.liquid',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

