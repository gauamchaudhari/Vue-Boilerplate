import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
