/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#06b6d4', // cyan-500
          secondary: '#818cf8', // indigo-400
          accent: '#f59e42', // orange-400
          background: '#101014',
          card: 'rgba(24, 26, 32, 0.85)',
        },
        boxShadow: {
          glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        },
        borderRadius: {
          xl: '1.25rem',
        },
      },
    },
    plugins: [],
  }
  