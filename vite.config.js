import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',              // ✅ important for domain root
  plugins: [react()],

  build: {
    outDir: 'dist'        // ✅ build output folder
  }
})