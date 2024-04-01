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
            <PhotoModal />
        </div>
    </NuxtLayout>
</template>

<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
});
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? titleChunk : 'Nam mô A Di Đà Phật';
    },
});
</script>
