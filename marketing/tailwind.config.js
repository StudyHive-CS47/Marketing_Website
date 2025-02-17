/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'studyhive': {
          dark: '#1E3A8A',    // Dark blue for text and accents
          light: '#BFDBFE',   // Light blue for backgrounds
          accent: '#3B82F6',  // Medium blue for buttons and highlights
          white: '#FFFFFF',
          gray: '#F8FAF5'     // Very light gray for subtle backgrounds
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}