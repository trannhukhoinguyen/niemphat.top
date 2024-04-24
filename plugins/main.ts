import { ProCalendar } from "@lbgm/pro-calendar-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ProCalendar);
});
