/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}', 
    './app/**/*.{js,jsx,ts,tsx}', // Ajusta según tu estructura
  ],
  presets: [require('nativewind/preset')], // 👈 Preset obligatorio
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // 👈 Evita otros errores comunes
};
