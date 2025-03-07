/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // Asegúrate de incluir este directorio si estás usando el nuevo sistema de directorios de Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
