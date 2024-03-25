// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
/*  devServer: {
    port: 3010
  },*/
  ssr: false,

  css: [

  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_main.scss" as *;',
        },
      },
    },
  },
  env: {

  },
  plugins: [

  ],
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
  ],
  site: {
    url: 'https://niemphat.top',
  },
  content: {

  },
  nitro: {
    preset: 'node-server'
  },
  colorMode: {
    preference: 'light'
  },
});
