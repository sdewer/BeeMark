import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: process.env.BUILD_TARGET === 'capacitor' ? './' : '/BeeMark/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 10000,
  },
  resolve: {
    dedupe: ['react', 'react-dom']
  }
}))