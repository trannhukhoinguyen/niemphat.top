<template>
  <div class="causes-wrapper">
    <div class="container">
      <h1>12 NHÂN DUYÊN</h1>

      <div class="gallery-wrap">
        <div class="item item-1">Vô Minh</div>
        <div class="item item-2">Hành</div>
        <div class="item item-3">Thức</div>
        <div class="item item-4"></div>
        <div class="item item-5"></div>
        <div class="item item-6"></div>
      </div>
      <div class="gallery-wrap">
        <div class="item item-7"></div>
        <div class="item item-8"></div>
        <div class="item item-9"></div>
        <div class="item item-10"></div>
        <div class="item item-11"></div>
        <div class="item item-12"></div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.causes-wrapper {
  html,body{
    width: 100%;
    height: 100%;
  }

  .container{
    padding: 75px 0;
    margin: 0 auto;
    width: 1140px;
  }

  h1{
    position: relative;
    margin-bottom: 45px;
    font-family: 'Oswald', sans-serif;
    font-size: 44px;
    text-transform: uppercase;
    color: #424242;
  }

  .gallery-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;
  }

  .item {
    flex: 1;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: none;
    transition: flex 0.8s ease;

    &:hover{
      flex: 7;
    }
  }

  .item-1 {
    background-image: url('https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80');
  }

  .item-2 {
    background-image: url('https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80');
  }

  .item-3 {
    background-image: url('https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80');
  }

  .item-4 {
    background-image: url('https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80');
  }

  .item-5 {
    background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80');
  }
  .item-6 {
    background-image: url('https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80');
  }

  .item-7 {
    background-image: url('https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80');
  }

  .item-8 {
    background-image: url('https://images.unsplash.com/photo-1503631285924-e1544dce8b28?auto=format&fit=crop&w=1234&q=80');
  }

  .item-9 {
    background-image: url('https://images.unsplash.com/photo-1510425463958-dcced28da480?auto=format&fit=crop&w=1352&q=80');
  }

  .item-10 {
    background-image: url('https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1234&q=80');
  }
  .item-11 {
    background-image: url('https://images.unsplash.com/photo-1499198116522-4a6235013d63?auto=format&fit=crop&w=1233&q=80');
  }

  .item-12 {
    background-image: url('https://images.unsplash.com/photo-1492760864391-753aaae87234?auto=format&fit=crop&w=1336&q=80');
  }

}
</style>
