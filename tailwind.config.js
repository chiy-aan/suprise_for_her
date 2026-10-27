/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        blush: {
          light: '#FFF0F5',
          DEFAULT: '#FFB6C1',
          dark: '#FF69B4',
        },
        lavender: {
          light: '#F3E8FF',
          DEFAULT: '#D8B4FE',
          dark: '#A855F7',
        }
      },
      fontFamily: {
        handwriting: ['"Dancing Script"', '"Caveat"', 'cursive'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Quicksand"', '"Outfit"', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'dance-sway': 'danceSway 3s ease-in-out infinite alternate',
        'dance-bounce': 'danceBounce 1.5s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
        'heartbeat': 'heartbeat 1.4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        danceSway: {
          '0%': { transform: 'rotate(-4deg) translateY(0)' },
          '50%': { transform: 'rotate(0deg) translateY(-6px)' },
          '100%': { transform: 'rotate(4deg) translateY(0)' },
        },
        danceBounce: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.18)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.12)' },
        }
      }
    },
  },
  plugins: [],
}
