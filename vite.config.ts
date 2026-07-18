import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Mimisha-s-Portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})
