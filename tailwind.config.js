/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefcfd',
          100: '#d7f7fb',
          200: '#b4eff6',
          300: '#7fe1f0',
          400: '#3fc7e2',
          500: '#00afcc',
          600: '#028ba8',
          700: '#096e87',
          800: '#10596e',
          900: '#13495c',
          950: '#072e3d',
        },
        accent: {
          teal: '#00F2FE',
          cyan: '#4FACFE',
          purple: '#8A2BE2',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        dark: {
          bg: '#060913',
          card: '#0d1322',
          cardBorder: '#1c263c',
          cardHover: '#131b31',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'gradient-x': 'gradientX 8s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        gradientX: {
          '0%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
          '100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
        }
      }
    },
  },
  plugins: [],
}
