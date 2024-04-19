<template>
  <a-card style="" class="ocean-container-card">
    <div class="ocean-wrapper" style="" title="Đại dương Sinh Tử (Ocean of Life and Death)">
        <div>
            <Turtle />
        </div>

        <div>
            <Bubbles />
        </div>

        <div>
            <Waves />
        </div>
    </div>
  </a-card>
</template>

<script setup>

import Bubbles from "/components/Water/Ocean/Bubbles.vue";
import Waves from "/components/Water/Ocean/Waves.vue";
</script>

<style scoped lang="scss">
.ocean-wrapper {
  height: 5%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
}
</style>
