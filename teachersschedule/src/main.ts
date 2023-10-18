import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router'

// require('module-alias/register')

const app = createApp(App)

app.use(router)
app.mount('#app')
