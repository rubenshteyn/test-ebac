import { createApp } from 'vue'
import App from './App.vue'
import '../src/scss/main.scss'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";
import router from '@/router'

const app = createApp(App)
    app.use(router)
    app.use(VueTelInput)
    app.component("v-select", vSelect);
    app.mount("#app")