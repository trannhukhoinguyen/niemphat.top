<template>
  <div class="none-layout">
    <slot />
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
