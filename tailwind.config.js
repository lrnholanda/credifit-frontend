/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#057D88',
        verdeClaro: '#32B7B7',
      },
    },
  },
  plugins: [],
}