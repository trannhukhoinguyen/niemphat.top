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

  modules: [
    '@nuxt/content',
    'nuxt-primevue'
  ],
  primevue: {
    cssLayerOrder: 'reset, tailwind-base, primevue, tailwind-utilities',
  },
  content: {
    // ... options
  }
});
