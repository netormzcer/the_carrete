/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ---------------------------------------------------------------
      // DESIGN TOKENS — único punto de verdad para el tema visual.
      // Cambiar el theme de "The Carrete" = editar solo este archivo.
      // ---------------------------------------------------------------
      colors: {
        // Escala neutra "carbono" — base del modo oscuro
        carbon: {
          950: '#0a0a09', // fondo global
          900: '#121110', // paneles / header
          800: '#1a1918', // tarjetas
          700: '#262421', // bordes y líneas finas
          600: '#3a3833',
          500: '#57544d',
          400: '#7d7970', // texto secundario
          300: '#a8a39a',
          200: '#cfcabf',
          100: '#eae6dd',
          50: '#f7f5f0',
        },
        // Blanco cálido tipo "papel fotográfico"
        paper: '#f4f1ea',
        // Acento único: tono ámbar de luz de cuarto oscuro (safelight)
        // — se usa con moderación: enlaces activos, foco, un CTA, detalles.
        ember: {
          50: '#fbf3e7',
          100: '#f5e2c2',
          200: '#eac88b',
          300: '#dfab5c',
          400: '#d0913c',
          500: '#c07d2c', // acento primario
          600: '#9c6323',
          700: '#754a1c',
        },
      },
      fontFamily: {
        // Tipografía neutra: geométrica para títulos, humanista para texto
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 20px 60px -15px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.9s ease-out forwards',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
