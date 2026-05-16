import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsApp': './src/App.vue'
      },
      shared: ['vue', 'vue-router', 'pinia']
    })
  ],
  server: {
    port: 5002,
    cors: true,
    strictPort: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    assetsDir: 'assets'
  },
  preview: {
    port: 5002,
    strictPort: true
  }
})