/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#050505',
        'night-vision-green': '#00ff41',
        'terminal-cyan': '#00f3ff',
        'dim-gray': '#6b7280',
      },
      fontFamily: {
        'tech': ['Share Tech Mono', 'Orbitron', 'Rajdhani', 'monospace'],
        'mono': ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'scanline': 'scanline 8s linear infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

