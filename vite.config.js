import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Dominio raíz para genda.lat
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
