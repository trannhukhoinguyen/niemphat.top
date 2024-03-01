// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: false,

  css: [
      'ant-design-vue/dist/antd.min.css',
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

  ],
  content: {

  },
  nitro: {
    preset: 'node-server'
  }
});
