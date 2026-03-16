/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Important pour que Tailwind "scanne" tes fichiers
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
