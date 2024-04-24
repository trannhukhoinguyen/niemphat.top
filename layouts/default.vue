<template>
  <div class="default-layout">
    <header>
      <TopBar />
    </header>
    <slot />
    <!--    <footer class="footer-section">
      <p>Nguyện sanh Tây-phương Tịnh độ trung</p>
      <p>Cửu phẩm Liên hoa vi phụ mẫu</p>
      <p>Hoa khai kiến Phật ngộ Vô sanh</p>
      <p>Bất thối Bồ-tát vi bạn lữ</p>
    </footer>-->
  </div>
</template>

<script setup lang="ts">
import TopBar from "/components/AllMenu/TopBar.vue";

useHead({
  titleTemplate: (titleChunk: String) => {
    return titleChunk ? titleChunk : "default.vue";
  },
});
</script>

<style scoped lang="scss">
.default-layout {
  .footer-section {
    text-align: center;
    position: relative;
  }
}
</style>
