import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
.use(pinia)
.use(router)
.use(ToastService)
.mount('#app')
