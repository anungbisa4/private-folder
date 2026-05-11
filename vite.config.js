import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Cek apakah folder submodule ada isinya
const hasInternal = fs.existsSync(path.resolve(__dirname, './builder-core/test.jsx'))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Jika folder internal ada, arahkan ke sana. Jika tidak, arahkan ke mock.
      '@internal': hasInternal
        ? path.resolve(__dirname, './builder-core')
        : path.resolve(__dirname, './src/mocks')
    }
  }
})