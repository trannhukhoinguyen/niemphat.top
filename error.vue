<template>
  <div>
      <FlashLight />
  </div>
  <div>
      <TwoCandles />
  </div>


</template>

<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk}` : 'Cái THẤY của bạn ở đâu?';
    },
});
</script>

<style scoped lang="scss">

</style>
