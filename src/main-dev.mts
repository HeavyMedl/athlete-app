import { createApp } from 'vue';
import GlobalComponentPlugin from '@heavymedl/vue-plugin-global-components';
import DevelopmentContainer from './DevelopmentContainer.vue';

createApp(DevelopmentContainer)
  .use(GlobalComponentPlugin, import.meta.glob('./pages/**/*.vue'))
  .mount('#app');
