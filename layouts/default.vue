<template>
    <div class="default-layout-wrapper">
      <div class="top-parts">
          <div class="menu">
              <AllMenu />
          </div>
          <div class="twelve-causes">
              <TwelveCauses />
          </div>
      </div>

      <div class="middle-parts">
          <div class="sky">
              <Sky />
          </div>
      </div>

      <div class="bottom-parts">
          <div class="ocean">
              <Ocean />
          </div>

      </div>

    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">


body {
  background: radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
}
.default-layout-wrapper {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  overflow: hidden;

  .bottom-parts {
    bottom: 0;
  }
}

</style>
