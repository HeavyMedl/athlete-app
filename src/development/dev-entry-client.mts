import '../style/dev-vendor.scss';
import { createApp } from 'vue';
import getRouter from './router.mjs'; // Adjust the path as necessary
import App from './DevApp.vue';

const app = createApp(App);
const router = getRouter();

app.use(router);
app.mount('#app');
