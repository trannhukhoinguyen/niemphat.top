<template>
  <div class="video-wrapper">

  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  dataId: {
    type: String,
    required: true,
  },
});

const videoId = ref(null);
const youtubeCallbackName = 'onYouTubeIframeAPIReady';
const youtubeExistsFlag = '$isYoutubeFrameAPIReady';
let YTPLayer = null;
let hasYTFrame = false;

const youtubeVideoID = computed(() => {
  if (videoId.value.indexOf(':/') !== -1) {
    const catcher = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const res = catcher.exec(videoId.value);
    if (res && res[1]) {
      return res[1];
    }
  }
  return videoId.value;
});

const whenYoutubeAPIReady = () => {
  const existsFlag = youtubeExistsFlag;
  return new Promise((resolve, reject) => {
    let elapsed = 0;
    let intervalHandle;
    const checker = () => {
      elapsed += 48;
      if (!!window[existsFlag]) {
        clearTimeout(intervalHandle);
        resolve();
      } else {
        if (elapsed <= 15000) {
          intervalHandle = setTimeout(checker, 48);
        } else {
          reject("timeout");
        }
      }
    };
    setTimeout(checker, 48);
  });
};

const hasYoutubeFrameAPI = () => {
  if (!hasYTFrame) {
    hasYTFrame = !!document.getElementsByClassName('.yt-frame-api').length;
  }
  return hasYTFrame;
};

function injectYoutubeFrameAPI() {
  const youtubeExistsFlag = this?.youtubeExistsFlag;
  const youtubeCallbackName = this?.youtubeCallbackName;

  window[youtubeCallbackName] = window[youtubeCallbackName] || function() {
    window[youtubeExistsFlag] = true;
    window[youtubeCallbackName] = null;
    delete window[youtubeCallbackName];
  };

  const tag = document.createElement('script');
  const first = document.getElementsByTagName('script')[0];
  tag.src = "https://www.youtube.com/iframe_api";
  tag.className = "yt-frame-api";
  first.parentNode.insertBefore(tag, first);
};

onMounted(() => {
  if (!hasYoutubeFrameAPI()) {
    injectYoutubeFrameAPI();
  }
  whenYoutubeAPIReady().then(
      () => {
        const player = document.querySelector('.video-placeholder');
        player.id = 'player-' + Math.floor(Math.random() * 1024) + Date.now() + Math.floor(Math.random() * 1024);

        YTPLayer = new YT.Player(player.id, {
          height: '360',
          width: '640',
          videoId: youtubeVideoID.value
        });
      },
      error => console.error(error)
  );
});

onUnmounted(() => {
  // Cleanup logic when component unmounts
});
</script>

<style scoped lang="scss">
.video-wrapper {
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px; height: 0; overflow: hidden;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

}
</style>
