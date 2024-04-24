<template>
  <div class="responsive-content-wrapper">
    <section class="cn-container">
      <div class="cn-slide" id="slide-main">
        <h2>Explore this</h2>
        <nav>
          <a href="#slide-1">Philosphy</a>
          <a href="#slide-2">Science</a>
          <a href="#slide-3">Literature</a>
        </nav>
      </div>

      <!-- Slide 1 and sub-slides -->
      <div class="cn-slide ts-slide-sub" id="slide-1">
        <h2>Philosophy</h2>
        <a href="#slide-main" class="cn-back">Back</a>
        <nav>
          <a href="#slide-1-1">Epistemology</a>
          <a href="#slide-1-2">Metaphysics</a>
          <a href="#slide-1-3">Aesthetics</a>
          <a href="#slide-1-4">Ethics</a>
        </nav>
      </div>

      <div class="cn-slide" id="slide-1-1">
        <h2>Epistemology</h2>
        <a href="#slide-1" class="cn-back">Back</a>
        <div class="cn-content">
          <p>Some text</p>
        </div>
      </div>

      <div class="cn-slide" id="slide-1-2">
        <h2>Metaphysics</h2>
        <!-- ... -->
      </div>

      <div class="cn-slide" id="slide-1-3">
        <!-- ... -->
      </div>

      <div class="cn-slide" id="slide-1-4">
        <!-- ... -->
      </div>

      <!-- Slide 2 and Sub-slides -->
      <!-- ... -->
    </section>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.responsive-content-wrapper {
  .cn-container {
    width: 60%;
    min-width: 300px;
    max-width: 820px;
    margin: 10px auto 0 auto;
    text-align: left;
    position: relative;
  }
  .cn-container h2 {
    font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
    color: #fff;
    position: absolute;
    z-index: 10000;
    text-shadow:
      0 0 1px rgba(255, 255, 255, 0.8),
      1px 1px 1px rgba(0, 0, 0, 0.2);
    font-size: 80px;
    line-height: 80px;
    top: 0px;
    right: 0px;
    white-space: nowrap;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s linear 0.7s;
  }
  .cn-container .cn-slide:target h2 {
    opacity: 1;
    transform: scale(1);
  }
  .cn-slide {
    text-align: center;
    position: absolute;
    left: 0px;
    padding-top: 80px;
    margin: 0 5%;
    width: 90%;
    opacity: 0;
  }
  .cn-slide:target {
    opacity: 1;
    z-index: 1000;
  }
  .cn-slide nav a {
    text-align: left;
    display: block;
    font-family: "BebasNeueRegular", "Arial Narrow", Arial, sans-serif;
    border: 8px solid #fff;
    padding: 2%;
    font-size: 66px;
    letter-spacing: 7px;
    text-shadow: 0px 5px 0px rgba(182, 105, 135, 0.4);
    color: #fff;
    line-height: 66px;
    outline: none;
    margin: 0 0 10px 0;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    background: #fff url(../images/1.jpg) no-repeat center center;
    background-size: 100%;
    background-clip: padding-box;
    opacity: 0;
    transform: scale(0);
    transition:
      opacity 0.4s linear,
      transform 0.4s linear,
      box-shadow 0.3s ease-in-out;
  }
  .cn-slide nav a:hover {
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .cn-slide:target nav a {
    opacity: 1;
    transform: scale(1);
  }
  .cn-slide nav a:nth-child(2) {
    transition-delay: 0.3s, 0.3s, 0s;
  }
  .cn-slide nav a:nth-child(3) {
    transition-delay: 0.6s, 0.6s, 0s;
  }
  .cn-slide nav a:nth-child(4) {
    transition-delay: 0.9s, 0.9s, 0s;
  }
  .cn-slide-sub nav a {
    width: 42%;
    display: inline-block;
    font-size: 40px;
  }
  .cn-slide-sub nav a:nth-child(odd) {
    margin-right: 5px;
  }
  .cn-content {
    background: #80b8ce url(../images/1.jpg) no-repeat center center;
    background-size: cover;
    text-align: left;
    padding: 20px 20px 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border: 8px solid #fff;
    margin-top: 5px;
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    transition: all 0.6s linear;
  }
  .cn-slide:target .cn-content {
    opacity: 1;
    transform: scale(1);
  }
  .cn-content p {
    line-height: 24px;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.9);
    color: rgba(103, 59, 77, 0.9);
    padding: 15px 20px;
    margin-bottom: 10px;
    background: rgba(255, 255, 255, 0.96);
    font-style: italic;
    border-top: 7px solid rgba(103, 59, 77, 0.6);
    user-select: none;
    transform: scale(1);
    transition: all 0.3s linear;
  }
  .cn-content:active p {
    transform: scale(0);
  }
  .cn-back {
    outline: none;
    text-indent: -9000px;
    width: 49px;
    height: 42px;
    background: transparent url(../images/arrow.png) no-repeat center center;
    position: absolute;
    top: 22px;
    left: -100px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.4s ease-in-out 1s;
  }
  .cn-slide:target .cn-back {
    left: 3px;
    opacity: 1;
  }
  /* Main Items */
  .cn-slide nav a[href="#slide-1"] {
    background-image: url(../images/1.jpg);
  }
  .cn-slide nav a[href="#slide-2"] {
    background-image: url(../images/2.jpg);
  }
  .cn-slide nav a[href="#slide-3"] {
    background-image: url(../images/3.jpg);
  }

  /* Items and sub-items of slide 1*/
  .cn-slide nav a[href="#slide-1-1"],
  #slide-1-1 .cn-content {
    background-image: url(../images/4.jpg);
  }
  .cn-slide nav a[href="#slide-1-2"],
  #slide-1-2 .cn-content {
    background-image: url(../images/5.jpg);
  }
  .cn-slide nav a[href="#slide-1-3"],
  #slide-1-3 .cn-content {
    background-image: url(../images/6.jpg);
  }
  .cn-slide nav a[href="#slide-1-4"],
  #slide-1-4 .cn-content {
    background-image: url(../images/7.jpg);
  }

  @media screen and (max-width: 1060px) {
    .cn-slide-sub nav a {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 900px) {
    .cn-container h2 {
      font-size: 48px;
      line-height: 95px;
    }
    .cn-slide nav a {
      font-size: 38px;
    }
    .cn-slide-sub nav a {
      width: auto;
      font-size: 36px;
      display: block;
    }
    .cn-slide-sub nav a:nth-child(odd) {
      margin-right: 0px;
    }
  }
}
</style>
