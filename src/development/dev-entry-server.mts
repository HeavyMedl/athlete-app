import { renderToString } from 'vue/server-renderer';
import { createSSRApp } from 'vue';
import { getRouter, resetRouter } from './router.mjs'; // Adjust the path as necessary
import App from './DevApp.vue';

export async function render(url: string) {
  resetRouter();

  const app = createSSRApp(App);
  const router = getRouter();
  app.use(router);

  router.push(url);
  await router.isReady();

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  const ctx = {};
  const html = await renderToString(app, ctx);

  return { html };
}
