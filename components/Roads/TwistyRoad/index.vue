<template>
  <div class="twisty-road-wrapper">
    <main><div class="mover"></div></main>
    <svg viewBox="-200 0 450 550">
      <path
        fill="transparent"
        stroke="white"
        strokeWidth="2"
        d="M50,0 C160,0 160,50 50,50 C-40,50 -40,100 50,100 C200,100 200,150 50,150 C50,150 50,200 50,200 C50,200 50,250 50,250 C-100,250 -100,300 50,300C240,300 240,350 50,350C-150,350 -150,400 50,400 C150,400 150,450 50,450C-80,450 -80,500 50,500C160,500 160,550 50,550"
      />
    </svg>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.twisty-road-wrapper {
  main {
    transform: translateX(-20px);
  }

  .mover {
    width: 1.2rem;
    height: 1.2rem;
    background: hsl(200, 90%, 40%);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 80%, 0 20%);

    offset-path: path(var(--path1));
    animation:
      move-it 19000ms 0ms infinite alternate ease-in-out,
      change-it 4000ms 0ms infinite alternate ease-in-out;
  }

  svg path {
    d: path(var(--path1));
    animation: change-d 4000ms 0ms infinite alternate ease-in-out;
    transition: opacity 400ms ease-in-out;
  }
  svg:hover path {
    opacity: 0;
  }

  @keyframes move-it {
    100% {
      offset-distance: 100%;
    }
  }
  @keyframes change-it {
    100% {
      offset-path: path(var(--path2));
    }
  }
  @keyframes change-d {
    100% {
      d: path(var(--path2));
    }
  }

  :root {
    --path1: "M50,0 C100,0 100,50 50,50 C0,50 0,100 50,100 C100,100 100,150 50,150 C0,150 0,200 50,200 C100,200 100,250 50,250C0,250 0,300 50,300C100,300 100,350 50,350C0,350 0,400 50,400C100,400 100,450 50,450C0,450 0,500 50,500C100,500 100,550 50,550";
    --path2: "M50,0 C160,0 160,50 50,50 C-40,50 -40,100 50,100 C200,100 200,150 50,150 C50,150 50,200 50,200 C50,200 50,250 50,250 C-100,250 -100,300 50,300C240,300 240,350 50,350C-150,350 -150,400 50,400 C150,400 150,450 50,450C-80,450 -80,500 50,500C160,500 160,550 50,550";
    --infinity: "M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z";
    --infinity2: "M93.9,46.4c90.3,9.5,13.8,17.9,23.5,17.9s170.5-7.8,17.5-17.5s-70.8-17.6-17.5-17.5c-90.7,0.1-13.3,7.2-22.1,17.1 c-80.9,8.8-15.7,17.9-25.4,17.9s-170.5-7.8-17.5-17.5s70.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z";
  }

  svg {
    width: 450px;
    position: absolute;
  }

  body {
    min-height: 100vh;
    background: #16161c;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
  }
}
</style>
