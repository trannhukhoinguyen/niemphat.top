import process from 'node:process'

const isDev = process.env.NODE_ENV === 'development'

// const apiBaseUrl = 'http://localhost:3001'
const apiBaseUrl = 'https://movies-proxy.vercel.app'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
/*  devServer: {
    port: 3010
  },*/
  devtools: { enabled: false },

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
    '@nuxt/image',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
  ],
  site: {
    url: 'https://niemphat.top',
  },
  content: {

  },
  nitro: {
    preset: 'node-server',
    routeRules: {
      '/**': { isr: false },
    },
  },
  colorMode: {
    preference: 'light'
  },


  routeRules: {
    '/**': isDev ?  { isr: 60 * 60 * 24 } : { cache: { swr: true, maxAge: 120, staleMaxAge: 60, headersOnly: true } },
  },

  experimental: {
    inlineSSRStyles: false,
    viewTransition: true,
    renderJsonPayloads: true,
  },
  runtimeConfig: {
    public: {
      apiBaseUrl,
    },
  },
  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `${apiBaseUrl}/ipx`,
        },
      },
    },
  },

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
      {
        code: 'es-ES',
        name: 'Español',
        file: 'es-ES.json',
      },
      {
        code: 'ja',
        name: '日本語',
        file: 'ja.json',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      },
      {
        code: 'pt-PT',
        name: 'Português',
        file: 'pt-PT.json',
      },
      {
        code: 'pt-BR',
        name: 'Português do Brasil',
        file: 'pt-BR.json',
      },
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'en',
  },
});
