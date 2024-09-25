import './style/dev-vendor.scss';

import { createApp } from 'vue';

import App from './DevApp.vue';
import router from './router.mjs';

const app = createApp(App);
app.use(router);
app.mount('#app');
