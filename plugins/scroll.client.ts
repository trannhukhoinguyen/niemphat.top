import { createRouterScroller } from "vue-router-better-scroller";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    createRouterScroller({
      selectors: {
        "#app-scroller": true,
      },
    }),
  );
});
