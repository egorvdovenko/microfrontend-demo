import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mfe2',
      filename: 'remoteEntry.js',
      exposes: {
        './CartApp': './src/App.vue'
      },
      shared: ['vue', 'vue-router', 'pinia']
    })
  ],
  server: {
    port: 5003,
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
    port: 5003,
    strictPort: true
  }
})