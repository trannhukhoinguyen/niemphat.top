import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

/*const app = createApp(App);
app.use(bottomNavigationVue);*/
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(bottomNavigationVue);
});
