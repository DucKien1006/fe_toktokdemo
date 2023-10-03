import { createApp } from 'vue'
import App from './App.vue'
import store from '@/stores/store.js'
import router from '@/routers/index.js'



createApp(App).mount('#app')
            .use(store)
            .use(router)
