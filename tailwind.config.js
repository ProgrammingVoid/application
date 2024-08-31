/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  daisyui: {
    darkTheme: "light",
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

