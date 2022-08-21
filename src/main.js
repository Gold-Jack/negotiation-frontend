import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App);

import '@/assets/css/global.css'

import router from './router'
app.use(router)

import store from './store'
app.use(store)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)


app.mount('#app')
