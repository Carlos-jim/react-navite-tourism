/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Ajusta según tu estructura
  ],
  presets: [require("nativewind/preset")], // 👈 Preset obligatorio
  theme: {
    extend: {
      colors: {
        primary: "#40E0D0",
        "primary-start": "#8A2BE2",
        "primary-end": "#4A00E0",
        'secondary': '#008B8B'
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
