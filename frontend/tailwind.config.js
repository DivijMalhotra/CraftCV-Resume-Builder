/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B4B',
          soft: '#1e3a8a',
        },
        brand: {
          DEFAULT: '#3B5BDB',
          light: '#5C7CFA',
          hover: '#2F4AC0',
          bg: '#EDF2FF',
          border: '#C7D7F5',
        },
      },
      fontFamily: {
        display: ['Inter', 'Urbanist', 'sans-serif'],
        sans: ['Inter', 'Urbanist', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(59,91,219,0.08)',
        'card-hover': '0 8px 40px rgba(59,91,219,0.16)',
        'blue-glow': '0 0 40px rgba(59,91,219,0.25)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in-scale': 'fade-in-scale 0.4s ease forwards',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-scale': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,91,219,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(59,91,219,0.30)' },
        },
      },
    },
  },
  plugins: [],
}
