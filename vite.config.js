import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        starter: resolve(import.meta.dirname, 'demo/index.html'),
        business: resolve(import.meta.dirname, 'demo/business.html'),
      },
    },
  },
})
