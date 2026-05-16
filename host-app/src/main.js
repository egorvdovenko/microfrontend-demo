import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Wait for federation to load
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')