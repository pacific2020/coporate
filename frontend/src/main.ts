import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import Vue3Toastify, {type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import formkitConfig from '@/formkit.config.ts'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin as any, defaultConfig(formkitConfig))

app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'colored',
} as ToastContainerOptions);

app.mount('#app')
