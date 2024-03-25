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
/*  wrapper: 'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4',
  top: {
    wrapper: 'sticky -top-8 -mt-8 pointer-events-none z-[1]',
    header: 'h-8 bg-background -mx-4 px-4',
    body: 'bg-background relative pointer-events-auto flex -mx-4 px-4',
    footer: 'h-8 bg-gradient-to-b from-background -mx-4 px-4'
  }*/
});
