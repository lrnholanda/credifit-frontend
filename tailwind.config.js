/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: '#057D88',
        lightgreen: '#32B7B7',
        lightorange: '#FFE5D5',
        darkorange: '#E66900'

      },
    },
  },
  plugins: [],
}