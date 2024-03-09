import { createApp } from 'vue'; // Import createApp from Vue
import './style.css'
import App from './App.vue';
import 'bootstrap-icons/font/bootstrap-icons.css';
import VueTypedJs from 'vue-typed-js';

const app = createApp(App); // Create the Vue app instance

app.use(VueTypedJs); // Use the VueTypedJs plugin

app.mount('#app'); // Mount the app to the DOM
