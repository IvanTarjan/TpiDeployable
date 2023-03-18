import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul' // or 'c8'
    },
  },
  build: {
    minify: false,
    sourcemap: false,
    rollupOptions: {
      cache: false,
    },
  }
})