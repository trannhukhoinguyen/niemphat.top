<template>
  <div class="turtle-wrapper">
    <div class="turtle" title="Rùa Mù (Blind Turtle)">
      <div class="turtle__head"></div>
      <div class="turtle__legs -left"></div>
      <div class="turtle__legs -right"></div>
      <div class="turtle__tail"></div>
      <div class="turtle__shell">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
/* TURTLE */
.turtle {
  width: 500px;
  height: 500px;
  animation: walking-turtle-03 2s ease-in-out infinite alternate;
  position: relative;
  //z-index: 2;
  bottom: 10vh;
  left: 50vw;
  transform: translate3d(-50%, -50%, 0);

  &__head {
    width: 75px;
    height: 85px;
    border-radius: 50%;
    background-color: #82c49f;
    position: relative;
    top: 22%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      top: 20px;
      width: 8px;
      height: 3px;
      border-radius: 50%;
      background-color: white;
      box-shadow: 1px 1px 1px 1px lightgray;
      content: "";
      position: absolute;
    }

    &::before {
      left: 13px;
    }
    &::after {
      right: 13px;
    }
  }

  &__shell {
    width: 220px;
    height: 250px;
    background-color: #6a757a;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
    }

    &::before {
      width: 200px;
      height: 235px;
      background-color: #5d666b;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }

    &::after {
      width: 50%;
      height: 100%;
      background-color: white;
      opacity: 0.1;
      top: 0;
    }

    div {
      width: 120px;
      height: 80px;
      background: #636e72;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
      }

      &::before {
        top: -30px;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-bottom: 30px solid #636e72;
      }

      &::after {
        bottom: -30px;
        left: 0;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
        border-top: 30px solid #636e72;
      }
    }
  }

  &__tail {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 35px solid #84c3a0;
    position: absolute;
    bottom: 18%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__legs {
    width: 30px;
    height: 300px;
    border-radius: 20%;
    background-color: #82c49f;
    position: absolute;
    top: 50%;
    left: 50%;

    &.-left {
      transform: translate(-50%, -50%) rotate(-45deg);
      animation: walking-turtle-01 2s ease-in-out infinite alternate;
    }

    &.-right {
      transform: translate(-50%, -50%) rotate(45deg);
      animation: walking-turtle-02 2s ease-in-out infinite alternate;
    }
  }
}

/* TURTLE KEYFRAMES */
@keyframes walking-turtle-01 {
  0% {
    transform: translate(-50%, -50%) rotate(-40deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-30deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-40deg);
  }
}
@keyframes walking-turtle-02 {
  0% {
    transform: translate(-50%, -50%) rotate(40deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(35deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(30deg);
  }
}
@keyframes walking-turtle-03 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  25% {
    transform: translate(-50%, -50%) rotate(3deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(-1deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(2deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-1deg);
  }
}
</style>
