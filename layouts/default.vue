<template>
    <div class="default-layout-wrapper">
      <div>
        <Menu />
      </div>

      <div class="pdf-viewer">
            <PdfViewer />
        </div>

      <div class="top-parts">
            <TwelveCauses />
        </div>

      <div class="bottom-parts">
            <!--                Bubbles-->
            <div class="bubble x1"></div>
            <div class="bubble x2"></div>
            <div class="bubble x3"></div>
            <div class="bubble x4"></div>
            <div class="bubble x5"></div>
            <div class="bubble x6"></div>
            <div class="bubble x7"></div>
            <div class="bubble x8"></div>
            <div class="bubble x9"></div>
            <div class="bubble x10"></div>

            <!--                Turtle-->
            <div class="turtle" title="Rùa Mù (Blind Turtle)">
                <div class="turtle__head"></div>
                <div class="turtle__legs -left"></div>
                <div class="turtle__legs -right"></div>
                <div class="turtle__tail"></div>
                <div class="turtle__shell">
                    <div></div>
                </div>
            </div>

            <div class="ocean" title="Biển Sinh Tử (Sea of Life and Death)">
                <!--                Waves-->
                <div class="wave"></div>
                <div class="wave"></div>
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

  // Sea waves
  .ocean {
    height: 5%;
    width:100%;
    position:absolute;
    bottom:0;
    left:0;
    background: #015871;
  }

  .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
    position: absolute;
    top: -198px;
    width: 6400px;
    height: 198px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  // TURTLE
  .turtle {
    width: 500px;
    height: 500px;
    animation: walking-turtle-03 2s ease-in-out infinite alternate;
    position: relative;
    top: 80vh;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    &__head {
      width: 75px;
      height: 85px;
      border-radius: 50%;
      background-color: #82C49F;
      position: relative;
      top: 22%;
      left: 50%;
      transform: translate(-50%, -50%);

      &::before, &::after {
        top: 20px;
        width: 8px;
        height: 3px;
        border-radius: 50%;
        background-color: white;
        box-shadow: 1px 1px 1px 1px lightgray;
        content: '';
        position: absolute;
      }

      &::before {left: 13px}
      &::after {right: 13px}
    }

    &__shell {
      width: 220px;
      height: 250px;
      background-color: #6A757A;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
      }

      &::before {
        width: 200px;
        height: 235px;
        background-color: #5D666B;
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
        background: #636E72;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &::before,
        &::after {
          content: '';
          position: absolute;
          left: 0;
        }

        &::before {
          top: -30px;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-bottom: 30px solid #636E72;
        }

        &::after {
          bottom: -30px;
          left: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
          border-top: 30px solid #636E72;
        }
      }
    }

    &__tail {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 35px solid #84C3A0;
      position: absolute;
      bottom: 18%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__legs {
      width: 30px;
      height: 300px;
      border-radius: 20%;
      background-color: #82C49F;
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
    0% 	 {transform: translate(-50%, -50%) rotate(-40deg)}
    25%  {transform: translate(-50%, -50%) rotate(-45deg)}
    50%  {transform: translate(-50%, -50%) rotate(-30deg)}
    75%  {transform: translate(-50%, -50%) rotate(-45deg)}
    100% {transform: translate(-50%, -50%) rotate(-40deg)}
  }
  @keyframes walking-turtle-02 {
    0% 	 {transform: translate(-50%, -50%) rotate(40deg)}
    25%  {transform: translate(-50%, -50%) rotate(45deg)}
    50%  {transform: translate(-50%, -50%) rotate(35deg)}
    75%  {transform: translate(-50%, -50%) rotate(45deg)}
    100% {transform: translate(-50%, -50%) rotate(30deg)}
  }
  @keyframes walking-turtle-03 {
    0% 	 {transform: translate(-50%, -50%) rotate(0deg)}
    25%  {transform: translate(-50%, -50%) rotate(3deg)}
    50%  {transform: translate(-50%, -50%) rotate(-1deg)}
    75%  {transform: translate(-50%, -50%) rotate(2deg)}
    100% {transform: translate(-50%, -50%) rotate(-1deg)}
  }

  /* WAVES KEYFRAMES */
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }

  /* BUBBLES KEYFRAMES */

  @-webkit-keyframes animateBubble {
    0% {
      margin-top: 1000px;
    }
    100% {
      margin-top: -100%;
    }
  }
  @-moz-keyframes animateBubble {
    0% {
      margin-top: 1000px;
    }
    100% {
      margin-top: -100%;
    }
  }
  @keyframes animateBubble {
    0% {
      margin-top: 1000px;
    }
    100% {
      margin-top: -100%;
    }
  }
  @-webkit-keyframes sideWays {
    0% {
      margin-left:0px;
    }
    100% {
      margin-left:50px;
    }
  }
  @-moz-keyframes sideWays {
    0% {
      margin-left:0px;
    }
    100% {
      margin-left:50px;
    }
  }
  @keyframes sideWays {
    0% {
      margin-left:0px;
    }
    100% {
      margin-left:50px;
    }
  }

  /* BUBBLES ANIMATIONS */
  .x1 {
    -webkit-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: -5%;
    top: 5%;

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
  }
  .x2 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 5%;
    top: 80%;

    -webkit-transform: scale(0.4);
    -moz-transform: scale(0.4);
    transform: scale(0.4);
  }
  .x3 {
    -webkit-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 10%;
    top: 40%;

    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    transform: scale(0.7);
  }
  .x4 {
    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

    left: 20%;
    top: 0;

    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
  }
  .x5 {
    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 30%;
    top: 50%;

    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    transform: scale(0.5);
  }
  .x6 {
    -webkit-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 50%;
    top: 0;

    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }
  .x7 {
    -webkit-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 65%;
    top: 70%;

    -webkit-transform: scale(0.4);
    -moz-transform: scale(0.4);
    transform: scale(0.4);
  }
  .x8 {
    -webkit-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
    -moz-animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;
    animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

    left: 80%;
    top: 10%;

    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
  }
  .x9 {
    -webkit-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
    -moz-animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;
    animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

    left: 90%;
    top: 50%;

    -webkit-transform: scale(0.6);
    -moz-transform: scale(0.6);
    transform: scale(0.6);
  }
  .x10 {
    -webkit-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
    -moz-animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;
    animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;

    left: 80%;
    top: 80%;

    -webkit-transform: scale(0.3);
    -moz-transform: scale(0.3);
    transform: scale(0.3);
  }

  /* BUBBLES OBJECTS */

  .bubble {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

    height: 200px;
    position: absolute;
    width: 200px;
  }
  .bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
    -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
    box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

    content: "";
    height: 180px;
    left: 10px;
    position: absolute;
    width: 180px;
  }

  #homepage-card {
    .ant-steps-item-title {
      font-family: Vernada;
      font-weight: 700;
      color: grey;
    }
  }
}

</style>
