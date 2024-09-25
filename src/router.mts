import { createRouter, createWebHistory } from 'vue-router';
import PageLanding from './pages/PageLanding.vue';
import PageDetail from './pages/PageDetail.vue';

import LandingProps from './mock/landing-model-data.mjs';
import DetailProps from './mock/details-model-data.mjs';

// Create a router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: PageLanding,
      props: LandingProps,
    },
    {
      path: '/athlete/:id/:athlete',
      name: 'Detail',
      component: PageDetail,
      props: DetailProps,
    },
  ],
});

export default router;
