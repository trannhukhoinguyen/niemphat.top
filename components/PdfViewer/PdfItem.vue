<template>
  <a-card title="Nam mô A Di Đà Phật!">
      <iframe
        class="embed-responsive-item"
        :src="src"
        type="application/pdf"
        allowfullscreen
      />
  </a-card>
</template>

<script setup>

const props = defineProps({
    src: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss">
.embed-responsive-item {
  height: 90vh;
  width: 90vw;
}
</style>
