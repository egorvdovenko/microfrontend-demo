import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// For standalone development
let app = null
let pinia = null

const mount = () => {
  pinia = createPinia()
  app = createApp(App)
  app.use(pinia)
  app.mount('#app')
  return app
}

// Auto-mount if running standalone (not federated)
if (!window.__FEDERATION__) {
  mount()
}

// Export for federation
export { mount }
export default App