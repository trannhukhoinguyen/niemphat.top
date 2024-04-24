export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_main.scss" as *;',
        },
      },
    },
  },
  plugins: [],
  modules: ["@nuxt/ui", "@nuxt/image", "@vueuse/nuxt", "@nuxtjs/i18n"],
  site: {
    url: "https://niemphat.top",
  },
  content: {},
  nitro: {
    preset: "node-server",
    routeRules: {
      "/**": { isr: false },
    },
  },
  colorMode: {
    preference: "light",
  },

  runtimeConfig: {
    public: {},
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
      {
        code: "de-DE",
        name: "Deutsch",
        file: "de-DE.json",
      },
      {
        code: "es-ES",
        name: "Español",
        file: "es-ES.json",
      },
      {
        code: "ja",
        name: "日本語",
        file: "ja.json",
      },
      {
        code: "zh-CN",
        name: "简体中文",
        file: "zh-CN.json",
      },
      {
        code: "pt-PT",
        name: "Português",
        file: "pt-PT.json",
      },
      {
        code: "pt-BR",
        name: "Português do Brasil",
        file: "pt-BR.json",
      },
    ],
    lazy: true,
    langDir: "internationalization",
    defaultLocale: "en",
  },
});
