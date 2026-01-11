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
      }
    },
  },
  plugins: [],
}
