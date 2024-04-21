<template>
    <div class="curious-lamp-wrapper">
      <section>
        <div class="lampWrap">
          <div class="lampBase"></div>
          <div class="lampStand">
            <div class="bar bar1">
              <div class="bar bar2">
                <div class="rotator">
                  <div class="bar bar3">
                    <div class="cord1"></div>
                    <div class="bar bar4">
                      <div class="cord2"></div>
                      <div class="lampHead">
                        <div class="lightBeam"></div>
                        <div class="bulb"></div>
                        <div class="lampshade"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="boxWrap">
          <div class="boxRight">
            <div class="ribbonVert"></div>
            <div class="ribbonHorz"></div>
          </div>

          <div class="boxCenter">
            <div class="boxLid"></div>
            <div class="boxLidShadow"></div>
          </div>

          <div class="boxTop">
            <div class="boxTopLid"></div>
            <div class="boxTopShadow"></div>
          </div>

          <div class="bow"></div>
        </div>

        <div class="jar">
          <div class="sparkle sparkle1"><span></span></div>
          <div class="sparkle sparkle2"><span></span></div>
          <div class="sparkle sparkle3"><span></span></div>
          <div class="sparkle sparkle4"><span></span></div>
          <div class="sparkle sparkle5"><span></span></div>
          <div class="sparkle sparkle6"><span></span></div>
          <div class="sparkle sparkle7"><span></span></div>
          <div class="sparkle sparkle8"><span></span></div>
          <div class="sparkle sparkle9"><span></span></div>
          <div class="sparkle sparkle10"><span></span></div>

          <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37 131.5C36.3333 126.333 36.1 112.7 40.5 99.5M46 84C54.6667 63.8333 85.3 23.2 138.5 22" stroke="black" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="footerMask">
          <div class="deskTop"></div>
        </div>
      </section>

      <!-- Outline toggle for animation help -->
      <div class="outlineToggle">
        <input type="checkbox" id="outlineToggle" />
        <label for="outlineToggle">Outlines</label>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.curious-lamp-wrapper {
  $gray1: #2c2c2c;
  $gray2: #414141;
  $gray3: #343434;
  $gray4: #7b7b7b;
  $gray4: #7d7d7d;
  $gray5: #a7a7a7;
  $green1: #4ab666;
  $green2: #399150;
  $blue1: #3892e8;


  *::after,
  *::before {
    content: "";
    position: absolute;
    display: block;
  }

  section {
    position: relative;
    display: block;
    flex: none;
    overflow: hidden;
    width: 830px;
    height: 630px;
    background: $gray1;
    border: 15px solid #fff;
  }

  .lampWrap {
    height: 485px;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }

  .lampBase {
    position: absolute;
    bottom: 0;
    right: 150px;
    height: 5px;
    width: 66px;
    background: #fff;
  }

  .lampStand {
    // animation: rotate1 3s infinite;
    transform-origin: 617px bottom;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 485px;
    width: 100%;
  }

  .lampHead {
    position: absolute;
    // animation: eyeballing 3s infinite 2s;
    transform-origin: 100% -140%;
    right: 0px;
    top: 50px;
    width: 30px;
    height: 30px;
    transform: rotate(110deg);
  }

  .lampshade {
    position: absolute;
    border-bottom: 73px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    height: 0;
    width: 59px;
    right: -10px;
    top: -60px;
    z-index: 0;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
    }
    &::after {
      width: 26px;
      height: 29px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      border-left: 7px solid $green2;
      background: $green1;
      -webkit-transform: rotate(-90deg);
      transform: rotate(-90deg);
      left: 7px;
      top: -27px;
    }
  }

  .moveSection {
    position: absolute;
    outline: 1px solid red;
    display: block;
    bottom: 0;
    right: 0;
  }

  .bar {
    position: absolute;
    width: 7px;
    background: #fff;
    &::after {
      width: 25px;
      height: 25px;
      background: $gray1;
      border-radius: 50%;
    }
    &.bar1 {
      height: 110px;
      right: 180px;
      bottom: 5px;
      transform-origin: center bottom;
      &::after {
        transform: translate(-9px, -20px);
        border: 5px solid $gray4;
        z-index: 1;
      }
    }
    &.bar2 {
      // animation: rotate2 6s infinite 2s;
      transform: rotate(45deg);
      height: 110px;
      right: 0;
      bottom: 120px;
      transform-origin: center bottom;
      &::after {
        top: 0;
        border: 5px solid $blue1;
        transform: translate(-10px, -17px);
      }
    }
    &.bar3 {
      height: 100px;
      &::after {
        border: 5px solid $green1;
        transform: translate(-9px, -23px);
      }
    }
    &.bar4 {
      // animation: rotate4 6s infinite 2s;
      transform: rotate(0deg);
      height: 50px;
      right: 0px;
      top: -70px;
      transform-origin: center bottom;
      box-shadow: inset -1px 17px 0px 0px #6669;
      &::after {
        display: none;
      }
      &::before {
        position: absolute;
        width: 60px;
        height: 94px;
        background: #2c2c2c;
        left: -60px;
        top: -34px;
        z-index: 0;
      }
    }
  }

  .rotator {
    // animation: rotate3 6s infinite 2s;
    transform: rotate(-100deg);
    position: relative;
    right: 0px;
    top: -115px;
    height: 110px;
    transform-origin: center bottom;
  }

  .cord1 {
    position: absolute;
    background: $gray1;
    width: 40px;
    height: 90px;
    border: 5px solid $gray4;
    border-radius: 20px;
    z-index: -1;
    top: -12px;
    left: -15px;
    transform: rotate(-26deg);
    &::after {
      width: 40px;
      height: 120px;
      background: #2c2c2c;
      left: 5px;
      right: 20px;
      position: absolute;
      transform: rotate(30deg);
    }
  }

  .cord2 {
    // animation: eyeballing 3s infinite 2s;
    border: 5px solid #7d7d7d;
    border-radius: 50%;
    width: 72px;
    height: 110px;
    position: absolute;
    left: -24px;
    top: -35px;
    z-index: -1;
    transform: rotate(110deg);
  }

  .bulb {
    width: 40px;
    height: 40px;
    background: #cdcece;
    left: -10px;
    top: -12px;
    position: absolute;
    z-index: -1;
    transform: rotate(-200deg);
    border-radius: 50%;
    &::after {
      width: 36px;
      height: 20px;
      background: #adadad;
      left: 2px;
      top: 9px;
      border-radius: 10%;
      transform: rotate(20deg);
    }
  }

  svg {
    backface-visibility: hidden;
    animation: curvy 9s ease-in-out infinite;
    position: absolute;
    left: -22px;
    top: -9px;
    transform: rotate(0deg);
    transform-origin: 90% 85%;
    .st1 {
      display: inline;
    }
    .st2 {
      fill: transparent;
    }
    path {
      stroke: #fff;
      stroke-width: 7px;
      stroke-endcap: round;
    }
  }

  .lightBeam {
    animation: flicker 10s linear infinite;
    border-bottom: 700px solid #505050;
    z-index: -1;
    border-left: 250px solid transparent;
    border-right: 250px solid transparent;
    height: 0;
    width: 60px;
    box-sizing: content-box;
    position: absolute;
    right: -260px;
    top: 13px;
    transform: rotate(0deg);
  }

  .jar {
    position: absolute;
    width: 245px;
    height: 280px;
    background: #ffffff09;
    border: 4px solid $gray2;
    z-index: 3;
    bottom: 115px;
    left: 130px;
    border-radius: 200px 200px 15px 15px;
  }

  .boxWrap {
    position: absolute;
    left: 135px;
    bottom: 20px;
    z-index: 3;
    .boxRight {
      width: 80px;
      height: 75px;
      border-radius: 3px;
      background: #cfd3d3;
      position: absolute;
      bottom: 110px;
      left: 130px;
      .ribbonVert {
        position: absolute;
        bottom: 0;
        left: 55px;
        width: 8px;
        height: 75px;
        background: $green1;
      }
      .ribbonHorz {
        position: absolute;
        bottom: 50px;
        left: 0;
        width: 80px;
        height: 8px;
        background: $green1;
        &::before {
          position: absolute;
          bottom: -50px;
          left: 20px;
          width: 8px;
          height: 75px;
          background: #2c2c2c2e;
        }
        &::after {
          position: absolute;
          bottom: -5px;
          left: 55px;
          width: 8px;
          height: 5px;
          background: #3e744d87;
        }
      }
    }
    .boxCenter {
      width: 120px;
      height: 95px;
      border-radius: 2px;
      background: #fff;
      position: absolute;
      bottom: 110px;
      left: 30px;
      &::after {
        width: 15px;
        height: 95px;
        background: #153dd4cc;
        left: 55px;
      }
      .boxLid {
        background: #fff;
        border-radius: 2px;
        width: 130px;
        height: 12px;
        position: absolute;
        top: 0;
        left: -5px;
      }
      .boxLidShadow {
        background: #a9a9a9;
        width: 120px;
        height: 5px;
        position: absolute;
        top: 12px;
        left: 0;
      }
    }
    .boxTop {
      width: 60px;
      height: 60px;
      border-radius: 2px;
      background: $gray2;
      position: absolute;
      bottom: 210px;
      left: 80px;
      &::after {
        width: 5px;
        height: 60px;
        background: #fff;
        left: 30px;
      }
      .boxTopLid {
        background: $gray2;
        border-radius: 2px;
        width: 70px;
        height: 12px;
        position: absolute;
        top: 0;
        left: -5px;
      }
      .boxTopShadow {
        background: #33333388;
        width: 60px;
        height: 5px;
        position: absolute;
        top: 12px;
        left: 0;
        z-index: 1;
      }
    }
    .bow {
      position: absolute;
      bottom: 275px;
      left: 90px;
      width: 44px;
      height: 20px;
      border-radius: 2em;
      background: #fff;
      &::after {
        width: 25px;
        height: 25px;
        border-radius: 2em;
        left: 10px;
        top: -5px;
        box-shadow: 0 -5px 6px #333;
        background: #fff;
      }
    }
  }

  .footerMask {
    height: 115px;
    width: 100%;
    background: $gray1;
    position: absolute;
    bottom: 0;
    left: 0;
    .deskTop {
      background: $gray2;
      float: right;
      height: 15px;
      width: 95%;
      margin-top: 8px;
    }
  }

  @keyframes curvy {
    0%   { transform: rotate(0deg); }
    40%  { transform: rotate(0deg); }
    50%  { transform: rotate(-3deg); }
    60%  { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .lampStand { animation: rotate1 8s 3s infinite ease-in-out; }
  @keyframes rotate1 {
    0%   { transform: rotate(0deg); }
    5%   { transform: rotate(-15deg); }
    75%  { transform: rotate(-15deg); }
    80%  { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .bar2 { animation: rotate2 8s 3s infinite ease-in-out;}
  @keyframes rotate2 {
    0%   { transform: rotate(45deg); }
    5%   { transform: rotate(65deg); }
    45%  { transform: rotate(65deg); }
    50%  { transform: rotate(45deg); }
    100% { transform: rotate(45deg); }
  }

  .rotator { animation: rotate3 8s 3s infinite ease-in-out;}
  @keyframes rotate3 {
    0%   { transform: rotate(-100deg); }
    5%   { transform: rotate(-130deg); }
    45%  { transform: rotate(-130deg); }
    50%  { transform: rotate(-100deg); }
    100% { transform: rotate(-100deg); }
  }

  .bar4 { animation: rotate4 8s 3s infinite ease-in-out; }
  @keyframes rotate4 {
    0%   { transform: rotate(0deg); }
    5%   { transform: rotate(30deg); }
    45%  { transform: rotate(30deg); }
    50%  { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  .lampHead,
  .cord2 { animation: eyeballing 8s infinite ease-in-out; }
  @keyframes eyeballing {
    0%   { transform: rotate(122deg); }
    20%  { transform: rotate(80deg); }
    50%  { transform: rotate(100deg); }
    90%  { transform: rotate(90deg); }
    100% { transform: rotate(122deg); }
  }

  @keyframes flicker {
    0%   { opacity: 0; }
    6%   { opacity: 0.3; }
    11%  { opacity: 0; }
    22%  { opacity: 0.3; }
    38%  { opacity: 0.3; }
    39%  { opacity: 0.035; }
    42%  { opacity: 0.3; }
    53%  { opacity: 0.36; }
    60%  { opacity: 0.25; }
    60%  { opacity: 0; }
    73%  { opacity: 0.25; }
    75%  { opacity: 0.1; }
    79%  { opacity: 0.25; }
    100% { opacity: 0.25; }
  }


  //////////////////////////
  // SPARKLES
  //////////////////////////

  .sparkle {
    position: relative;
    width: 0;
    height: 0;
    transform: scale(.25);
    &::before,
    &::after  {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
    &::before {
      border-top: 30px solid #fff;
    }
    &::after {
      transform: translatey(-100%);
      border-bottom: 30px solid #fff;
    }
    span {
      position: absolute;
      transform: translate(5px,-5px);
      &::before,
      &::after  {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }
      &::before {
        border-left: 30px solid #fff;
      }
      &::after {
        transform: translatex(-100%);
        border-right: 30px solid #fff;
      }
    }
  }

  .sparkle1 {
    animation: pulse1 8s ease-in-out infinite;
    left: 21px;
    top: 240px;
  }
  .sparkle2 {
    animation: pulse2 8s ease-in-out infinite;
    left: 5px;
    top: 190px;
  }
  .sparkle3 {
    animation: pulse6 8s ease-in-out infinite;
    left: 8px;
    top: 157px;
  }
  .sparkle4 {
    animation: pulse3 8s ease-in-out infinite;
    left: 28px;
    top: 135px;
  }
  .sparkle5 {
    animation: pulse7 8s ease-in-out infinite;
    left: 78px;
    top: 122px;
  }
  .sparkle6 {
    animation: pulse8 8s ease-in-out infinite;
    left: 236px;
    top: 247px;
  }
  .sparkle7 {
    animation: pulse10 8s ease-in-out infinite;
    left: 184px;
    top: 172px;
  }
  .sparkle8 {
    animation: pulse5 8s ease-in-out infinite;
    left: 160px;
    top: 144px;
  }
  .sparkle9 {
    animation: pulse9 8s ease-in-out infinite;
    left: 175px;
    top: 120px;
  }
  .sparkle10 {
    animation: pulse1 8s ease-in-out infinite;
    left: 169px;
    top: 50px
  }


  @keyframes pulse1 {
    0%   {transform: scale(0);}
    06%  {transform: scale(0);}
    10%  {transform: scale(.25);}
    14%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse2 {
    0%   {transform: scale(0);}
    8%  {transform: scale(0);}
    12%  {transform: scale(.25);}
    16%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse3 {
    0%   {transform: scale(0);}
    10%  {transform: scale(0);}
    14%  {transform: scale(.25);}
    18%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse4 {
    0%   {transform: scale(0);}
    36%  {transform: scale(0);}
    40%  {transform: scale(.25);}
    44%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse5 {
    0%   {transform: scale(0);}
    51%  {transform: scale(0);}
    55%  {transform: scale(.25);}
    59%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse6 {
    0%   {transform: scale(0);}
    56%  {transform: scale(0);}
    60%  {transform: scale(.25);}
    64%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse7 {
    0%   {transform: scale(0);}
    66%  {transform: scale(0);}
    70%  {transform: scale(.25);}
    74%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse8 {
    0%   {transform: scale(0);}
    71%  {transform: scale(0);}
    75%  {transform: scale(.25);}
    79%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse9 {
    0%   {transform: scale(0);}
    54%  {transform: scale(0);}
    58%  {transform: scale(.25);}
    62%  {transform: scale(0);}
    100% {transform: scale(0);}
  }
  @keyframes pulse10 {
    0%   {transform: scale(0);}
    31%  {transform: scale(0);}
    35%  {transform: scale(.25);}
    39%  {transform: scale(0);}
    100% {transform: scale(0);}
  }




  // -------------------- Setup -----------------------
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  // Animation helper
  .outlineToggle {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 4;
    input { display: none; }
    label {
      cursor: pointer;
      background: $gray2;
      color: #aaa;
      display: block;
      padding: 1em;
      font-size: 11px;
      transition: .2s;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 4px #33333388;
      text-align: center;
    }
  }
  body.outlineIt *,
  body.outlineIt *::before,
  body.outlineIt *::after {
    outline: 1px dashed goldenrod;
  }
}
</style>
