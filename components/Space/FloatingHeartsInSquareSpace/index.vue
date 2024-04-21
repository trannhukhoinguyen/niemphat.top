<template>
  <div class="floating-hearts-in-square-space-wrapper">
    <div class="css-doodle"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.floating-hearts-in-square-space-wrapper {
  .css-doodle {
    width: 100vw;
    height: 100vh;
    background-color: #270f34;
    position: relative;
    perspective: 30vmin;
  }

  .css-doodle::after,
  .css-doodle::before {
    content: '';
    position: absolute;
    background: radial-gradient(circle, #51eaea, #fffde1, #ff9d76, #FB3569);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(81, 234, 234, 0.7), 0 0 50px rgba(255, 253, 225, 0.7), 0 0 50px rgba(255, 157, 118, 0.7), 0 0 50px rgba(251, 53, 105, 0.7);
    animation: scale-up 12s linear infinite;
  }

  .css-doodle::after {
    top: calc(100% * random());
    left: calc(100% * random());
  }

  .css-doodle::before {
    top: calc(100% * random());
    left: calc(100% * random());
  }

  @keyframes scale-up {
    0%, 95.01%, 100% {
      transform: translateZ(0) rotate(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    95% {
      transform: translateZ(35vmin) rotateZ(calc(-180deg + 180deg * random()));
    }
  }

}
</style>
