import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Icon } from '@iconify/vue';
import '@iconify/iconify';




const app = createApp(App)

app.component('Icon', Icon);
app.mount('#app')
