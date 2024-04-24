<template>
  <div class="counting-cubes-wrapper">
    <div class="timerWrap" id="cubes">
      <div class="row">
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="cube">
          <div class="front"></div>
          <div class="top"></div>
          <div class="back"></div>
          <div class="bottom"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Cube matrix
const matrix = [
  [
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
  ],
  [
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
  ],
  [
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
  ],
];

const grad = new Date(0, 0, 0, 0, 0, 0, 0);
const cube = document.getElementById("cubes");
const cube2 = document.getElementById("cubes2");

function renderDigit(container: any, number: any) {
  const children = container.children().children();

  const len = matrix[number].length;
  let state;
  for (let i = 0; i < len; i++) {
    state = children.eq(i).data("state") || "off";
    if (
      (matrix[number][i] && state === "off") ||
      (!matrix[number][i] && state === "on")
    ) {
      rotate.call(children.eq(i));
    }
  }
}

function render() {
  const now = new Date();
  const diff = String(grad.getTime() - now.getTime());
  const len = diff.length;
  renderDigit(cube, Number(diff.charAt(len - 4)));
  renderDigit(cube2, Number(diff.charAt(len - 4)));
  requestAnimationFrame(render);
}

requestAnimationFrame(render);

// Click to flip
document.querySelectorAll(".cube").forEach((elem) => {
  elem.addEventListener("click", rotate);
});

function rotate() {
  let angle = parseInt(this.dataset.angle) + -90 || -90;
  const state = this.dataset.state || "off";
  this.style.transform = `rotateX(${angle}deg)`;
  this.dataset.angle = angle;
  this.dataset.state = state === "on" ? "off" : "on";
}
</script>

<style scoped lang="scss">
.counting-cubes-wrapper {
  .timerWrap {
    background: rgba(0, 0, 0, 1);
    box-shadow:
      40px 20px 110px rgba(0, 0, 0, 0.1),
      110px 110px 300px rgba(0, 0, 0, 0.4),
      10px 60px 140px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    margin: 50px;
  }

  .row {
    height: 106.5px;
    perspective: 900px;
    box-shadow: 0 10px 50px #000;
    .cube:nth-of-type(2) {
      position: relative;
      z-index: 1;
    }
    &:last-of-type {
      height: 100px;
    }
  }

  .cube {
    width: 100px;
    height: 100px;
    display: inline-block;
    transition: transform 1s;
    transform-style: preserve-3d;
    float: left;
    color: #666;
    font-size: 0.8em;
    margin-bottom: 3px;
    margin: 0.5px;
    > div {
      position: absolute;
      border: 1px solid rgba(0, 0, 0, 0.3);
      width: 100px;
      height: 100px;
      border-radius: 5px;
      box-shadow: 0 0 8px rgba(255, 255, 255, 0.3) inset;
    }
  }

  .front {
    transform: rotateY(0deg) translateZ(50px);
    background: linear-gradient(to bottom right, #f3d655, #d5b634);
  }
  .back {
    transform: rotateX(180deg) translateZ(50px);
    background: linear-gradient(to bottom right, #f3d655, #d5b634);
  }
  .top {
    transform: rotateX(90deg) translateZ(50px);
    background: linear-gradient(to bottom right, #171717, #111);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2) inset !important;
  }
  .bottom {
    transform: rotateX(-90deg) translateZ(50px);
    background: linear-gradient(to bottom right, #171717, #111);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2) inset !important;
  }
  .left {
    transform: rotateY(-90deg) translateZ(50px);
    background: linear-gradient(to bottom right, #f3d655, #d5b634);
  }
  .right {
    transform: rotateY(90deg) translateZ(50px);
    background: linear-gradient(to bottom right, #f3d655, #d5b634);
  }

  // ------------------ LAYOUT ------------------

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
  }

  body {
    background: #e6cb50;
    background: linear-gradient(to bottom right, #f7dc5b, #c1a015);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-height: 600px) {
    .timerWrap {
      transform: scale(0.8);
    }
  }
}
</style>
