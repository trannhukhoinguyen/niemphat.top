<template></template>

<script lang="ts" setup>
const route = useRoute;
const router = useRouter;
const mantraPhrase = route.params.mantraPhrase;

console.log("mantraPhrase", mantraPhrase);
</script>

<style lang="scss" scoped></style>
