<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <div
            h-full w-full font-sans
            grid="~ lt-lg:rows-[1fr_max-content] lg:cols-[max-content_1fr]"
            of-hidden view-transition-app transition duration-0
        >
            <div id="app-scroller" of-x-hidden of-y-auto relative>
                <NuxtPage />
            </div>
            <NavBar lg:order-first />
            <IframeModal />
            <Modal />
        </div>
    </NuxtLayout>
</template>

<script setup>
import '@unocss/reset/tailwind.css';
import NavBar from "/components/Posts/NavBar.vue";
import IframeModal from "/components/Posts/IframeModal.vue";
import Modal from "/components/Posts/photo/Modal.vue";

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
    titleTemplate: title => title !== 'Nuxt Movies' ? `${title} · Nuxt Movies` : title,
    meta: [
        { name: 'description', content: 'A Di Đà Phật ✨' },
        { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/webp',
            href: '/assets/images/posts/movies.webp',
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
