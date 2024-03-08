<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
    window.scrollTo(0, 0);
});
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk}` : 'A Di Đà Phật';
    },
});
</script>
