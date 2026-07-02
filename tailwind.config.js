/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        templeBlack: '#0B0B0B',
        midnightBlue: '#111827',
        jagannathRed: '#C1121F',
        templeYellow: '#FFD54F',
        saffronOrange: '#F57C00',
        peacockGreen: '#2E7D32',
        skyBlue: '#38BDF8',
        ivoryWhite: '#FAFAFA',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(255, 213, 79, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(193, 18, 31, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
