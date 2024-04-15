<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <div id="app-scroller" of-x-hidden of-y-auto relative>
            <NuxtPage />
        </div>
        <NavBar lg:order-first />
        <IframeModal />
        <Modal />
    </NuxtLayout>
</template>

<script setup>
import '@unocss/reset/tailwind.css';

const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
});

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    charset: 'utf-8',
    title: 'app.vue',
    titleTemplate: title => title !== 'Namo Amitābha ✨' ? `${title} · Namo Amitābha ✨` : title,
    meta: [
        { name: 'description', content: 'Namo Amitābha ✨' },
        { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/webp',
            href: '/assets/images/logo_1.png',
        },
    ],
})
</script>

<style scoped lang="scss">
html, body {
    height: 100vh;
    margin: 0;
    padding: 0;
    background: #111;
    color: white;
    color-scheme: dark;
}
</style>
