import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

let app = null
let pinia = null

const mount = () => {
  pinia = createPinia()
  app = createApp(App)
  app.use(pinia)
  app.mount('#app')
  return app
}

// Auto-mount if running standalone
if (!window.__FEDERATION__) {
  mount()
}

export { mount }
export default App