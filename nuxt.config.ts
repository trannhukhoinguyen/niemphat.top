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
        code: "vi",
        name: "Vietnamese",
        file: "vi.json",
      },
    ],
    lazy: true,
    langDir: "internationalization",
    defaultLocale: "en",
  },
});