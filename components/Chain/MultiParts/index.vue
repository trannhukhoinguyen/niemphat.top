<template>
  <div class="multi-part-wrapper non-sentient-creature" v-if="quantity === 5">
      <div class="orb" title="Đất đại"></div>
      <div class="orb" title="Nước đại"></div>
      <div class="orb" title="Gió đại"></div>
      <div class="orb" title="Lửa đại"></div>
      <div class="orb" title="Không đại"></div>
  </div>
  <div class="multi-part-wrapper sentient-creature" v-if="quantity === 7">
      <div class="orb" title="Đất đại"></div>
      <div class="orb" title="Nước đại"></div>
      <div class="orb" title="Gió"></div>
      <div class="orb" title="Lửa đại"></div>
      <div class="orb" title="Không đại"></div>
      <div class="orb" title="Kiến đại"></div>
      <div class="orb" title="Thức đại"></div>
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
        orb1: ( color1: #F8DEDE, color2: #F8DEDE, color3: red ),
        orb2: ( color1: #FFEEE2, color2: #FFEEE2, color3: orange ),
        orb3: ( color1: #FCFADE, color2: #FCFADE, color3: yellow ),
        orb4: ( color1: #BEFAC0, color2: #BEFAC0, color3: green ),
        orb5: ( color1: #BED0FA, color2: #BED0FA, color3: blue ),
        orb6: ( color1: #E3A9F5, color2: #E3A9F5, color3: indigo ),
        orb7: ( color1: #FBC4ED, color2: #FBC4ED, color3: violet ),
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

    &::after {
      mix-blend-mode: color-dodge;
    }
  }

}

.non-sentient-creature {
  @for $n from 1 through 5 {
    .orb:nth-child(#{$n}) {
      animation: anim-#{$n} 7s infinite ease-in-out;
      transform: rotate($n * 72deg) translate3d(150px,0,0);

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
      33% { transform: rotate($n * 72deg) translate3d(20px, 0, 0) rotateY(72deg); }
      66% { transform: translate3d(20px, 0, 0) rotate($n * 72deg) rotateZ(180deg) rotateY(180deg); }
      100% { transform: rotate($n * 72deg) translate3d(150px, 0, 0) rotateX(180deg); }
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
      33% { transform: rotate($n * 50deg) translate3d(20px, 0, 0) rotateY(72deg); }
      66% { transform: translate3d(20px, 0, 0) rotate($n * 50deg) rotateZ(180deg) rotateY(180deg); }
      100% { transform: rotate($n * 50deg) translate3d(150px, 0, 0) rotateX(180deg); }
    }
  }
}
</style>
