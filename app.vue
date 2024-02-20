<template>
    <NuxtPage />
</template>

<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
});
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Xin ` : '123';
    },
});
</script>
