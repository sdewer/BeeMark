import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BeeMark/',
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 10000,
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
})
