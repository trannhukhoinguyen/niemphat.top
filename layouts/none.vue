<template>
  <div class="none-layout">
    <slot />
    <!--    <footer class="layout-footer" style="padding: 0px">
      <p>Nguyện sanh Tây-phương Tịnh độ trung</p>
            <p>Cửu phẩm Liên hoa vi phụ mẫu</p>
            <p>Hoa khai kiến Phật ngộ Vô sanh</p>
            <p>Bất thối Bồ-tát vi bạn lữ</p>
    </footer>-->
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? titleChunk : "guest-layout";
  },
});
</script>

<style lang="scss">
.none-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: white;

  .layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    background: #f0f2f5;
    flex: 0 0 auto;
  }
}
</style>
