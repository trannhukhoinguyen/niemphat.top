<template>
  <a-space class="pdf-viewer">
    <template v-for="file in fileSource">
      <PdfItem :fileSrc="file.src" />
    </template>
  </a-space>
</template>

<script setup>
const props = defineProps({
  fileSource: {
    type: Array,
    required: true,
  },
});
const fileTypes = ["sutra", "vinaya", "sastra"];
</script>

<style scoped lang="scss"></style>
