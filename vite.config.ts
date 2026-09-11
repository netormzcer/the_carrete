import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTA para GitHub Pages:
// - Si publicas en https://usuario.github.io/nombre-del-repo/  -> usa base: '/nombre-del-repo/'
// - Si publicas en un dominio propio o en usuario.github.io (repo raíz) -> usa base: './' o '/'
// './' (ruta relativa) es la opción más segura porque funciona en ambos casos sin tocar nada más.
export default defineConfig({
  base: '/the_carrete/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
