<template>
  <div class="full-watch-wrapper">
      <div class="wrapper">
          <div class="watch-strap">
              <div class="strap-circle"></div>
              <div class="strap"></div>
              <div class="watch-strap-holder left-up"></div>
              <div class="watch-strap-holder left-bottom"></div>
              <div class="watch-strap-holder right-up"></div>
              <div class="watch-strap-holder right-bottom"></div>
              <div class="watch-lace">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <span class="top"></span>
                  <span class="bottom"></span>
              </div>
          </div>
          <div class="watch-case">
              <div class="reflection"></div>
              <div class="reflection bottom"></div>
              <div class="watch-center">
                  <div class="watch-points"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  <div class="watch-tips">
                      <span class="hours"></span>
                      <span class="minutes"></span>
                      <span class="seconds"></span>
                  </div>
                  <div class="watch-date">17 SEP</div>
                  <div class="watch-alert">Your meeting <br>in <strong>15</strong> min</div>
                  <div class="watch-week">
                      <span class="week-arrow"></span>
                      <ul>
                          <div>S</div>
                          <div>M</div>
                          <div>T</div>
                          <div>W</div>
                          <div>T</div>
                          <div>F</div>
                          <div>S</div>
                      </ul>
                  </div>
                  <div class="watch-day">
                      <div class="sun">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>

                  </div>
                  <div class="watch-week days">
                      <span class="week-arrow"></span>
                      <ul>
                          <div>3</div>
                          <div>6</div>
                          <div>9</div>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.full-watch-wrapper {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

    body {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
    }

    .wrapper {
        position: relative;
    }

    .watch-case {
        position: absolute;
        z-index: 4;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 400px;
        width: 400px;
        overflow: hidden;
        background-image: linear-gradient(-45deg, #fdfdfd, #ceced6, #fdfdfd);
        border-radius: 50%;
        box-shadow: 0 0 1px 2px rgba(#b4b1c1,.7);
    }

    .watch-center {
        background-image: radial-gradient(#ffffff,#eeeeef);
        height: 380px;
        width: 380px;
        border-radius: 50%;
        position: absolute;
        z-index: 4;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: -1px -1px 1px 0 #fdfdfd, 0 0 0 2px #b8b7c3, inset 0 0 0 2px #d1d1d6, inset 0 0 0 4px rgba(#fff,.7), inset 0 0 8px 8px rgba(#000,.1), inset 0 0 50px 50px rgba(#000,0.05);
    }

    .watch-strap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 480px;
        width: 220px;
        background-color: #101022;
        border-radius: 6px;
        z-index: 2;
    }

    .watch-strap .strap-circle {
        position: absolute;
        height: 409px;
        width: 409px;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        box-shadow: inset -1px 0 8px 3px #151427, 0 0 2px 1px rgba(#fff,.8);
    }

    .watch-points {
        position: absolute;
        z-index: 5;
        top: calc(50% - 6px);
        left: calc(50% - 1px);
        transform: translate(-50%, -50%);
    }

    .watch-week {
        position: absolute;
        top: calc(50% - 6px);
        left: calc(50% - 6px);
        transform: translate(-120px, 40px) rotate(-70deg);
        z-index: 10;
    }

    .watch-date {
        position: absolute;
        top: calc(50% - 100px);
        left: 50%;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        transform: translate(-50%, -50%);
    }

    .watch-alert {
        position: absolute;
        top: calc(50% + 100px);
        text-transform: uppercase;
        text-align: center;
        left: 50%;
        font-size: 14px;
        color: #BFBCD8;
        font-weight: 600;
        transform: translate(-50%, -50%);
    }

    .watch-tips {
        height: 300px;
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
        z-index: 11;
    }

    .hours {
        width: 190px;
        height: 6px;
        position: absolute;
        top: calc(50% - 3px);
        left: calc(50% - 30px);
        transform: rotate(153deg);
        background-color: #fff;
        transform-origin: 30px center;
        box-shadow: 0 4px 12px 2px rgba(#000,0.15);
        border-radius: 0 20px 20px 0;
        z-index: 12;
    }

    .seconds {
        width: 197px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: calc(50% - 30px);
        transform: rotate(0deg);
        animation: 10s seconds linear infinite;
        background-color: #FE0806;
        transform-origin: 30px center;
        box-shadow: 0 0 16px 2px rgba(#FE0806,0.2);
        border-radius: 0 20px 20px 0;
        z-index: 15;
    }

    .minutes {
        width: 170px;
        height: 6px;
        position: absolute;
        top: calc(50% - 3px);
        left: calc(50% - 30px);
        transform: rotate(15deg);
        background-color: #000004;
        transform-origin: 30px center;
        border-radius: 0 20px 20px 0;
        z-index: 11;
    }

    .watch-lace {
        width: 0;
        height: 20px;
        border-bottom: 10px solid transparent;
        border-top: 10px solid transparent;
        border-right: 8px solid #32322A;
        position: absolute;
        right: -98px;
        top: calc(50% - 20px);
        border-radius: 6px;
        z-index: 30;
        transform: scaleX(.9) scaleY(1.1);
    }

    .watch-day {
        height: 90px;
        width: 90px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(42px, -23px);
        background-color: #1341D1;
        animation: 8s day-bg infinite;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: inset 0 -1px 1px 1px #F6F6F6;
        background-image: radial-gradient(#F6F6F6 18px, transparent 19px), radial-gradient(#F6F6F6 14px, transparent 15px), radial-gradient(#F6F6F6 18px, transparent 19px), radial-gradient(#F6F6F6 60px, transparent 61px);
        background-repeat: no-repeat;
        background-position: -28px 6px, 0 6px, 28px 6px, 0 42px;
    }

    .sun {
        height: 10px;
        width: 10px;
        background-color: transparent;
        position: absolute;
        border: 3px solid #fff;
        border-radius: 50%;
        left: calc(50% - 8px);
        top: 12px;
        animation: 8s sun infinite;
    }

    .sun:after {
        content: "";
        display: block;
        position: absolute;
        height: 20px;
        width: 20px;
        background-color: #212045;
        border-radius: 50%;
        top: calc(50% - 10px);
        left: calc(50% - 10px);
        animation: 8s moon infinite;
    }

    .sun div {
        position: absolute;
        height: 7px;
        width: 1px;
        background-color: #fff;
        top: calc(50% - 7px/2);
        left: calc(50% - 1px);
        border-radius: 10px;
        animation: 8s sun-arms infinite;
    }

    .watch-points i:nth-child(1) {
        transform: rotate((1*360/60-6)deg) translate(0, -172px);
    }

    .watch-points i:nth-child(2) {
        transform: rotate((2*360/60-6)deg) translate(0, -172px);
    }

    /* Add styles for other watch points similarly */

    @keyframes seconds {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes sun {
        0%, 33% {
            transform: rotate(0);
            height: 12px;
            width: 12px;
        }
        33% {
            background-color: #fff;
            transform: rotate(180deg);
            height: 12px;
            width: 12px;
        }
        66% {
            transform: rotate(180deg);
            background-color: #fff;
            height: 12px;
            width: 12px;
        }
        100% {
            background-color: transparent;
            transform: rotate(360deg);
            height: 10px;
            width: 10px;
        }
    }

    @keyframes sun-arms {
        0% {
            opacity: 1;
        }
        20%, 55% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes moon {
        0% {
            transform: translate(-14px, 14px);
            opacity: 0;
        }
        25% {
            transform: translate(-14px, 14px);
            opacity: 1;
        }
        45% {
            transform: translate(0px, 0px);
            opacity: 1;
        }
        50% {
            transform: translate(14px, -14px);
            opacity: 0;
        }
        50% {
            opacity: 0;
        }
        100% {
            transform: translate(0, 0);
            opacity: 0;
        }
    }

    @keyframes day-bg {
        0% {
            background-color: #2b7edc;
        }
        8%,50% {
            background-color: #212045;
        }
        60% {
            background-color: #1341D1;
        }
        100% {
            background-color: #2b7edc;
        }
    }

}
</style>
