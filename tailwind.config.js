/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        primary: "#9FEF00",
        secondary: "#3ECF8E",
        text: "#E5E7EB",
        muted: "#9CA3AF"
      }
    },
  },
  plugins: [],
}
