import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Step1Page from './pages/Step1Page.vue'
import Step2Page from './pages/Step2Page.vue'
import Step3Page from './pages/Step3Page.vue'

const app = createApp(App)
const routes = [
  { path: '/', name: 'Step1', component: Step1Page },
  { path: '/step2', name: 'Step2', component: Step2Page },
  { path: '/step3', name: 'Step3', component: Step3Page }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.mount('#app')
