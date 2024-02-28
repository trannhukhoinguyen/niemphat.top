// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  // Defaults options
  css: [
      'ant-design-vue/dist/antd.min.css',
      'primevue/resources/themes/aura-light-green/theme.css',
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
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  // It's best to keep your GM key where all other keys are: your .env file; however this is inaccessible client-side.
  // Here, we tell Nuxt the specific env's we want to make available client-side.
  env: {
    GOOGLEMAPSAPIKEY: process.env.GOOGLEMAPSAPIKEY
  },

  // Register your new plugin
  plugins: [
    '@/plugins/mapGoogle.client.js',
  ],

  modules: [
    '@nuxt/content',
    'nuxt-primevue'
  ],

  content: {
    // ... options
  }
});
