<template>
  <div class="space-ball-orbit-wrapper" style="">
    <div class="Block_Loading_Balls">
      <div class="ball_container_sB">
        <span class="loading_ball _1"></span>
        <span class="loading_ball _2"></span>
        <span class="loading_ball _3"></span>
        <span class="loading_ball _4"></span>
        <span class="loading_ball _5"></span>
        <span class="loading_ball _6"></span>
        <span class="loading_ball _7"></span>
        <span class="loading_ball _8"></span>
        <span class="loading_ball _9"></span>
        <span class="loading_ball _10"></span>
        <span class="loading_ball _11"></span>
        <span class="loading_ball _12"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.space-ball-orbit-wrapper {
  body {
    background: rgb(0, 0, 0);
    font-size: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: rgb(255, 255, 255);
    margin: 0em;
    padding: 0em;
    width: 100%;
    height: 100%;
  }
  .Block_Loading_Balls {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
  }
  .ball_container_sB {
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 16em);
    width: 32em;
    white-space: nowrap;
    text-align: center;
  }
  .loading_ball {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 8em;
    height: 8em;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    transform: translate(-4em, 0%) scale(0);
    opacity: 0;
    animation: 8000ms linear infinite visible_orbit;
  }
  _1::before {
    content: "1";
    color: green;
  }
  .loading_ball._2 {
    z-index: 1;
    animation-delay: 800ms;
  }
  _2::before {
    content: "2";
    color: blue;
  }
  .loading_ball._3 {
    z-index: 1;
    animation-delay: 1600ms;
  }
  _3::before {
    content: "3";
    color: red;
  }
  .loading_ball._4 {
    z-index: 1;
    animation-delay: 2400ms;
  }
  .loading_ball._5 {
    z-index: 1;
    animation-delay: 3200ms;
  }
  .loading_ball._6 {
    z-index: 1;
    animation-delay: 4000ms;
  }
  .loading_ball._7 {
    z-index: 1;
    animation-delay: 4800ms;
  }
  .loading_ball._8 {
    z-index: 1;
    animation-delay: 5600ms;
  }
  .loading_ball._9 {
    z-index: 1;
    animation-delay: 6400ms;
  }
  .loading_ball._10 {
    z-index: 1;
    animation-delay: 7200ms;
  }
  .loading_ball._11 {
    z-index: 1;
    animation-delay: 8000ms;
  }
  .loading_ball._12 {
    z-index: 1;
    animation-delay: 8800ms;
  }
  @keyframes visible_orbit {
    0% {
      transform: translate(-4em, 0%) scale(0);
      opacity: 0;
    }
    25% {
      transform: translate(-8em, 0%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(12em, 0%) scale(1.5);
      opacity: 1;
    }
    75% {
      transform: translate(32em, 0%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(24em, 0%) scale(0);
      opacity: 0;
    }
  }
  @media (max-width: 400px) {
    body {
      font-size: 60%;
    }
  }
  @media (min-width: 401px) and (max-width: 600px) {
    body {
      font-size: 70%;
    }
  }
  @media (min-width: 601px) and (max-width: 800px) {
    body {
      font-size: 80%;
    }
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    body {
      font-size: 90%;
    }
  }
  @media (min-width: 1001px) and (max-width: 1200px) {
    body {
      font-size: 100%;
    }
  }
  @media (min-width: 1201px) and (max-width: 1400px) {
    body {
      font-size: 100%;
    }
  }
  @media (min-width: 1401px) {
    body {
      font-size: 125%;
    }
  }
}
</style>
