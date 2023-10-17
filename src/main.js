import { createApp } from 'vue'
import App from './App.vue'
import store from '@/stores/store.js'
import router from '@/routers/index.js'



createApp(App).use(store)
            .use(router)
            .mount('#app')
