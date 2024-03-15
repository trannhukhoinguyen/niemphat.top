// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  server: {
    port: 3010 // default: 3000
  },
  ssr: true,

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
  ],
  content: {

  },
  nitro: {
    // preset: 'node-server'
  },
  colorMode: {
    preference: 'light'
  },

});
