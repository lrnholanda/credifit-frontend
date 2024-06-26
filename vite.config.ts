import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // API NestJS
      '/api': 'http://localhost:3001/',
    },  
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    sourcemap: true,
  },
})
