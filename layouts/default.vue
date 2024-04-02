<template>
  <div class="default-layout">
    <header>
      <AllMenu />
    </header>

    <main>

    </main>

    <footer class="footer-section">
      <p>Nguyện sanh Tây-phương Tịnh độ trung</p>
      <p>Cửu phẩm Liên hoa vi phụ mẫu</p>
      <p>Hoa khai kiến Phật ngộ Vô sanh</p>
      <p>Bất thối Bồ-tát vi bạn lữ</p>
    </footer>

  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: String) => {
    return titleChunk ? titleChunk : 'Nam mô A Di Đà Phật';
  },
});

</script>

<style scoped lang="scss">
.default-layout {
  height: 100%;
  .footer-section {
    text-align: center;
    position: relative;
    bottom: 0;
  }
}
</style>
