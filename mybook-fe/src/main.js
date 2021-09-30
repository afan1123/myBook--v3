import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
let app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
