<template>

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest',
});
const route = useRoute;
const router = useRouter;
const mantraPhrase = route.params.mantraPhrase;

console.log('mantraPhrase', mantraPhrase);

</script>

<style scoped>

</style>
