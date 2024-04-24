<template>
  <div class="multi-part-wrapper non-sentient-creature" v-if="quantity === 5">
      <div class="orb" title="Đất"></div>
      <div class="orb" title="Nước"></div>
      <div class="orb" title="Gió"></div>
      <div class="orb" title="Lửa"></div>
      <div class="orb" title="Không"></div>
  </div>
  <div class="multi-part-wrapper sentient-creature" v-if="quantity === 7">
      <div class="orb" title="Đất"></div>
      <div class="orb" title="Nước"></div>
      <div class="orb" title="Gió"></div>
      <div class="orb" title="Lửa"></div>
      <div class="orb" title="Không"></div>
      <div class="orb" title="Kiến"></div>
      <div class="orb" title="Thức"></div>
  </div>
</template>

<script setup>
const props = defineProps({
    quantity: {
        type: Number,
        required: true,
        default: 5,
    },
});
</script>

<style scoped lang="scss">
$colors: (
        orb1: ( color1: #F09EA7, color2: #F09EA7, color3: #ff1055 ),
        orb2: ( color1: #F6CA94, color2: #F6CA94, color3: #00f2ff ),
        orb3: ( color1: #FAFABE, color2: #FAFABE, color3: #00ff77 ),
        orb4: ( color1: #C1EBC0, color2: #C1EBC0, color3: #ffee00 ),
        orb5: ( color1: #C7CAFF, color2: #C7CAFF, color3: #ff1055 ),
        orb6: ( color1: #CDABEB, color2: #CDABEB, color3: #00f2ff ),
        orb7: ( color1: #F6C2F3, color2: #F6C2F3, color3: #70369d ),
);
@function getColor($orb, $color) {
  @return map-get(map-get($colors, $orb), $color);
}
.multi-part-wrapper {
  body {
    background: #09061b;
    margin: 170px auto;
    position: relative;
    width: 250px;
    height: 250px;
  }

  .orb {
    border-radius: 50%;
    position: absolute;
    /*    top: 0;
        left: 0;*/
    width: 100px;
    height: 100px;
    overflow: hidden;
    mix-blend-mode: lighten;
    // Try screen

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &::before {
      // background: #09061b;
    }

    &::after {
      mix-blend-mode: color-dodge;
    }
  }

}

.non-sentient-creature {
  @for $n from 1 through 5 {
    .orb:nth-child(#{$n}) {
      animation: anim-#{$n} 7s infinite ease-in-out;
      transform: rotate($n * 70deg) translate3d(150px,0,0);

      &::after {
        background: radial-gradient(
                        getColor(orb#{$n}, color1),
                        #000 31%,
                        getColor(orb#{$n}, color2) 34%,
                        #000 52%,
                        getColor(orb#{$n}, color3) 60%,
                        #000 70%);
      }
    }

    @keyframes anim-#{$n} {
      33% { transform: rotate($n * 50deg) translate3d(20px, 0, 0) rotateY(60deg); }
      66% { transform: translate3d(20px, 0, 0) rotate($n * 70deg) rotateZ(180deg) rotateY(180deg); }
      100% { transform: rotate($n * 50deg) translate3d(150px, 0, 0) rotateX(180deg); }
    }
  }
}

.sentient-creature {
  @for $n from 1 through 7 {
    .orb:nth-child(#{$n}) {
      animation: anim-#{$n} 7s infinite ease-in-out;
      transform: rotate($n * 50deg) translate3d(150px,0,0);

      &::after {
        background: radial-gradient(
                        getColor(orb#{$n}, color1),
                        #000 31%,
                        getColor(orb#{$n}, color2) 34%,
                        #000 52%,
                        getColor(orb#{$n}, color3) 60%,
                        #000 70%);
      }
    }

    @keyframes anim-#{$n} {
      33% { transform: rotate($n * 50deg) translate3d(20px, 0, 0) rotateY(60deg); }
      66% { transform: translate3d(20px, 0, 0) rotate($n * 90deg) rotateZ(180deg) rotateY(180deg); }
      100% { transform: rotate($n * 50deg) translate3d(150px, 0, 0) rotateX(180deg); }
    }
  }
}
</style>
