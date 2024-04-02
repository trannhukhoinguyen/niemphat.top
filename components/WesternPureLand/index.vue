<template>
  <div style="padding: 24px" class="western-pure-land-card" title="Tây Phương Cực Lạc">
    <!-- The video -->
    <video autoplay muted loop id="myVideo">
      <source src="/assets/videos/Western-Pure-Land-Buddhism.mp4" type="video/mp4">
    </video>

    <!-- Optional: some overlay text to describe the video -->
    <div class="content">
      <h1>Heading</h1>
      <p>Lorem ipsum...</p>
      <!-- Use a button to pause/play the video with JavaScript -->
      <UButton id="myBtn" @click="myFunction">Pause</UButton>
    </div>

    <div style="padding:12px">
      <a href="/emancipation/prayer-and-dedication">
        <h2 class="green">PRAYER & DEDICATION (PHÁT NGUYỆN & HỒI HƯỚNG)</h2>
      </a>
      <a href="/emancipation/mantras/surangama">
        <h2>SURANGAMA SAMADHI MANTRA (Chú LĂNG NGHIÊM)</h2>
      </a>
      <a href="/emancipation/sudden-enlightenment">
        <h2>SUDDEN ENLIGHTENMENT MEDITATION METHOD (Đốn Ngộ Pháp Môn)</h2>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
// Get the video
const video = document.getElementById("myVideo");

// Get the button
const btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
</script>

<style scoped lang="scss">
.western-pure-land-card {
  /* Style the video: 100% width and height to cover the entire window */
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }

  /* Add some content at the bottom of the video/page */
  .content {
    position: fixed;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 100%;
    padding: 20px;
  }

  /* Style the button used to pause/play the video */
  #myBtn {
    width: 200px;
    font-size: 18px;
    padding: 10px;
    border: none;
    background: #000;
    color: #fff;
    cursor: pointer;
  }

  #myBtn:hover {
    background: #ddd;
    color: black;
  }
}
</style>
