<template>
  <div class="home-page">
    <!--      <Lotus
              :isYellowLotus="true"
              :isPinkLotus="false"
      />
      <Lotus />-->
    <div style="margin-top: 100px; margin-left: 200px;">
      <MultiParts :quantity="7"/>
    </div>
    <div style="margin-top: 100px; margin-left: 800px;">
      <MultiParts :quantity="5"/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home-page {

}
</style>
