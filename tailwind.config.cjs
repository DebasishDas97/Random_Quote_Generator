/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mainBg": "linear-gradient(256.47deg, #5E2AB3 2.64%, #161E6C 140.46%)"
      },
      boxShadow: {
        "shadowCustom": "2px 4px 10px 2px rgba(0, 0, 0, 0.25)"
      },
    },
  },
  plugins: [],
}
