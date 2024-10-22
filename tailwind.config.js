/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Inter',
        'lexend-deca': 'Lexend Deca'
      },
      fontSize: {
        'base': '15px',
        '3xl': '28px'
      },
      boxShadow: {
        '3xl': '0px 20px 20px -10px rgba(23, 25, 41, 0.20)',
      },
      colors: {
        'dark-blue': '#0A0C1C',
        'desaturated-blue': '#1B1937',
        'soft-violet': '#AB5CDB'
      }
    },
  },
  plugins: [],
}