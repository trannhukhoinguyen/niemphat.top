<template>
  <div class="animation-effect-display-wrapper">
    <div class="wrapper run-animation" id="animate">
      <div class="logo">
        <span class="marvel">Marvel</span>
        <span class="studios">Studios</span>

        <div class="restart">Restart</div>
      </div>
    </div>

    <div class="images"></div>
  </div>
</template>

<script setup lang="ts">
const element = document.getElementById("animate");

if (element) {
  // reset the transition by...
  element.addEventListener(
    "click",
    function (e) {
      e.preventDefault();

      console.log("element", element.classList);

      // removing the class
      element.classList.remove("run-animation");

      // triggering reflow
      void element.offsetWidth;

      // and re-adding the class
      element.classList.add("run-animation");
    },
    false,
  );
}
</script>

<style scoped lang="scss">
.animation-effect-display-wrapper {
  // colors
  $red: #e12835;
  $ruby: #be2633;
  $white: #fff;
  $black: #000;

  // typography
  $default-font: "Barlow Condensed", sans-serif;
  $font-size: 5rem;
  $text-padding: 0.4rem;
  $tween: 95px;

  // animations
  $animation-unit: 300ms;
  $slideOut: $animation-unit * 2.5;
  $slideStudios: $animation-unit * 4;

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: $red;
    background-image: radial-gradient(
      $red 20%,
      $ruby 50%,
      rgba($black, 0.5) 100%
    );
    background-size: 120%;
    background-position: center;
    font-family: $default-font;
    animation: tighten-vinette ease-out ($animation-unit * 6) forwards;
  }

  .images {
    pointer-events: none;
    height: 100vh;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    opacity: 0.6;
    z-index: 20;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://static.comicvine.com/uploads/original/11124/111240517/4986890-4700382785-29908.jpg");
  }

  .wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    cursor: pointer;
    text-align: center;
    &:hover {
      .restart {
        opacity: 0.8;
      }
    }
  }

  .restart {
    color: $white;
    margin-top: 20px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: -0.08rem;
    transition: opacity $animation-unit/2 linear;
  }

  .marvel,
  .studios {
    position: relative;
    color: $white;
    text-transform: uppercase;
    letter-spacing: -0.2rem;
    font-size: $font-size;
    margin: 0.05rem 0.05rem 0.5rem;
    padding: 0 $text-padding;
    display: inline-block;
  }

  .studios {
    font-weight: 500;
    letter-spacing: -0.3rem;
    transform: translateX(-$tween);
  }

  .marvel {
    z-index: 10;
    font-weight: 800;
    transform: translateX($tween);
    &:before {
      z-index: -10;
      content: "";
      display: block;
      background-color: $red;
      border: solid rgba($white, 0.2) 1px;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  %bar {
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    background-color: $white;
    display: block;
    left: $text-padding;
    right: $text-padding;
  }

  .studios {
    &:after,
    &:before {
      @extend %bar;
    }
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }

  // Cue all the animations when run-animation class is activated
  .wrapper.run-animation {
    animation: shrink ease-out ($animation-unit * 16) forwards
      ($animation-unit * 2);
    .marvel {
      transform: translateX($tween);
      animation: slide-out-X $slideOut ease forwards;
    }
    .studios {
      transform: translateX(-$tween);
      color: transparent;
      animation:
        slide-out-X $slideOut ease forwards,
        show-text $animation-unit linear forwards ($slideOut * 2);
      &:before {
        transform: translateY(($font-size + ($text-padding * 2)) / 2);
        animation: slide-out-Y $animation-unit ease forwards $slideOut;
      }
      &:after {
        transform: translateY(-(($font-size + ($text-padding * 2)) / 2));
        animation: slide-out-Y $animation-unit ease forwards $slideOut;
      }
    }
    .restart {
      opacity: 0;
      animation: fade-down ($animation-unit * 4) ease ($animation-unit * 12)
        forwards;
    }
    ~ .images {
      animation:
        flicker-images ($animation-unit * 5) 2 steps(1, end),
        fade-out ($animation-unit * 5 * 3) forwards;
    }
  }

  @keyframes slide-out-X {
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-out-Y {
    100% {
      transform: translateY(0);
    }
  }

  @keyframes show-text {
    100% {
      color: $white;
    }
  }

  @keyframes shrink {
    100% {
      transform: scale(0.8);
    }
  }

  @keyframes tighten-vinette {
    100% {
      background-size: 120%;
    }
  }

  @keyframes fade-down {
    0% {
      transform: translateY(-2rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.5;
    }
  }

  @keyframes fade-out {
    100% {
      opacity: 0;
    }
  }

  @keyframes flicker-images {
    0% {
      background-image: url("https://i.ytimg.com/vi/lhgrYaBmplY/maxresdefault.jpg");
    }
    10% {
      background-image: url("https://doomrocket.com/wp-content/uploads/2014/08/IMG_4527.png");
    }
    20% {
      background-image: url("https://www.nerdmuch.com/wp-content/uploads/2016/02/funny-deadpool.jpg");
    }
    30% {
      background-image: url("https://i.pinimg.com/736x/b4/e0/d5/b4e0d51ab9af14198f733ca582d06794--geek-things-geek-art.jpg");
    }
    40% {
      background-image: url("https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3025621-poster-p-1-ka-pow-marvel-opens-massive-comic-book-images-archive-and-api-to-fans-developers.jpg");
    }
    50% {
      background-image: url("http://nerdist.com/wp-content/uploads/2015/03/captain-america-iron-man-civil-war-1024x597.jpg");
    }
    60% {
      background-image: url("https://geekreply.com/wp-content/uploads/2015/05/watchmen.jpg");
    }
    70% {
      background-image: url("http://cdn.playbuzz.com/cdn/3c096341-2a6c-4ae6-bb76-3973445cfbcf/6b938520-4962-403a-9ce3-7bf298918cad.jpg");
    }
    80% {
      background-image: url("http://cdn.wegotthiscovered.com/wp-content/uploads/2016/05/Storm-and-Black-Panther-marriage.jpg");
    }
    90% {
      background-image: url("https://am21.akamaized.net/tms/cnt/uploads/2014/01/Black-Widow-70s-Suit-3-580x270.jpg");
    }
    100% {
      background-image: url("https://i.ytimg.com/vi/lhgrYaBmplY/maxresdefault.jpg");
    }
  }
}
</style>
