import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      remotes: {
        mfe1: 'http://localhost:5002/assets/remoteEntry.js',
        mfe2: 'http://localhost:5003/assets/remoteEntry.js'
      },
      shared: ['vue', 'vue-router', 'pinia']
    })
  ],
  server: {
    port: 5001,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})