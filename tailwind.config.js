/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f7f5e8',
        cmyk: {
          cyan: '#00aeef',
          magenta: '#ec008c',
          yellow: '#fff200',
          black: '#2a2a2a', // Softer black for text
        },
        highlighter: {
          yellow: '#ffff00',
          pink: '#ff69b4',
          green: '#00ff00',
          blue: '#00ffff',
        }
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'persona': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flash: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        flash: 'flash 0.5s steps(4, end)',
      }
    },
  },
  plugins: [],
}
