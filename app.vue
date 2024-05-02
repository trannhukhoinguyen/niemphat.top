<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0);
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  charset: "utf-8",
  title: "app.vue",
  titleTemplate: (title) =>
    title !== "Namo Amitābha Buddha ✨" ? `${title} · Namo Amitābha Buddha ✨` : title,
});
</script>

<style scoped lang="scss">

</style>
