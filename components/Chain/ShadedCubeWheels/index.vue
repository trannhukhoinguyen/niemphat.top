<template>
  <div class="shaded-cube-wheels-wrapper" />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.shaded-cube-wheels-wrapper {
  @import 'compass/css3';

  $l4gon: 5em;
  $n4gon: 4;
  $ca4gon: 360deg/$n4gon;
  $ri4gon: .5*$l4gon;

  $gap: .1*$l4gon;

  $n12gon: 12;
  $ca12gon: 360deg/$n12gon;
  $l12gon: $l4gon + $gap;
  $ri12gon: .5*$l12gon/tan(.5*$ca12gon);

  $rwheel: $ri12gon + $ri4gon;
  $off: .5*$rwheel;
  $t: 10s;
  $u: $t/$n12gon; // delay unit
  $c1:
          #d9d9d9 #dfdfdf #ccc #bbb #e5e5e5,
          #d6d6d6 #dfdfdf #bbb #ccc #e3e3e3;
  $a1: .8 .9 .8 .9 .9, 1 .8 1 .8 .9;
  $d1: .4 .8 .2 .3 .3, .9 .8 .7 .7 .8;

  body {
    overflow: hidden;
    margin: 0;
    height: 100vh;
    perspective: 64em;
    perspective-origin:
            calc(50% + #{$l4gon}) calc(50% - #{$l4gon});
    background: radial-gradient(#{at 50% 100%},
            #fff, #999);
  }

  div, :before, :after {
    position: absolute;
    transform-style: preserve-3d;
  }

  .assembly {
    top: 50%; left: 50%;
    transform: rotateX(-15deg) rotateY(45deg);
    font-size: 2vmin;
  }

  .wheel {
    @for $i from 0 to 2 {
      $cw: nth($c1, $i + 1);
      $aw: nth($a1, $i + 1);
      $dw: nth($d1, $i + 1);

      &:nth-child(#{$i + 1}) {
        transform: translate(pow(-1, $i)*$off)
        if($i > 0, rotateX(-90deg), ());

        @if $i < 1 {
          > * { animation-direction: reverse; }
        }

        @for $j from 0 through $n4gon {
          .cube__face:nth-child(#{$j + 1}):after {
            opacity: nth($aw, $j + 1);
            background: nth($cw, $j + 1);
          }
        }

        @for $j from 0 to $n12gon {
          $dc: $j*$u;

          .cube:nth-child(#{$j + 1}) {

            @for $k from 0 through $n4gon {
              $d: -2*$i*$t - pow(-1, $i)*($j*$u + nth($dw, $k + 1)*$t);

              :nth-child(#{$k + 1}) {
                &:after {
                  animation-delay: $d;
                }
              }
            }
          }
        }
      }
    }
  }

  .rotor { animation: r $t linear infinite; }

  @keyframes r {
    0% { transform: rotateY(1turn); }
  }

  .cube {
    @for $i from 0 to $n12gon {
      &:nth-child(#{$i + 1}) {
        transform: rotateY($i*$ca12gon)
        translateZ($rwheel) ;
      }
    }

    &__face {
      margin: -.5*$l4gon;
      width: $l4gon; height: $l4gon;
      backface-visibility: hidden;
      box-shadow: 0 0 1px #eee;
      background: #fafafa;

      &:nth-child(-n + 4) {
        background: linear-gradient(#fff, #ddd)
      }

      @for $i from 0 through $n4gon {
        &:nth-child(#{$i + 1}) {
          transform: if($i < $n4gon,
                  rotateY($i*$ca4gon),
                  rotateX($ca4gon))
          translateZ($ri4gon);
        }
      }

      &:before, &:after {
        width: inherit; height: inherit;
        animation: a .5*$t ease-in-out infinite alternate;
        content: '';
      }
    }
  }

  @keyframes a { to { opacity: .2; } }
}
</style>
