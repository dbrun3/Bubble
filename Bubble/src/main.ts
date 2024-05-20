import './assets/main.css'

import { createApp } from 'vue'
import VueGoogleMaps from "@fawmi/vue-google-maps";
//@ts-ignore
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_API_KEY,
        map_id: "370b58f4df099767"
    },
})
app.mount('#app')
