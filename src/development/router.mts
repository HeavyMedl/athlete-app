// router.js
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
  type Router,
} from 'vue-router';
import PageLanding from '../pages/PageLanding.vue';
import PageDetail from '../pages/PageDetail.vue';
import LandingProps from '../mock/landing-model-data.mjs';
import DetailProps from '../mock/details-model-data.mjs';

const isServer = typeof window === 'undefined';

// Create a router instance
const createRouterInstance = () => {
  return createRouter({
    history: isServer ? createMemoryHistory() : createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Landing',
        component: PageLanding,
        props: {
          pageData: LandingProps.pageData,
        },
      },
      {
        path: '/athlete/:id/:athlete',
        name: 'Detail',
        component: PageDetail,
        props: {
          pageData: DetailProps.pageData,
        },
      },
    ],
  });
};

let router: Router; // Router will be reused

export const getRouter = () => {
  if (!router) {
    router = createRouterInstance();
  }
  return router;
};

export const resetRouter = () => {
  if (router) {
    router = createRouterInstance(); // Reset the router instance
  }
};

export default getRouter;
