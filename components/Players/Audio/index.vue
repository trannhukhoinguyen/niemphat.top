<template>
  <div class="audio-wrapper">
    <main class="audioPlayer" id="app">
      <a class="nav-icon" v-on:click="isPlaylistActive=!isPlaylistActive" :class="{'isActive': isPlaylistActive}" title="Music List">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div class="audioPlayerList" :class="{'isActive': isPlaylistActive}">
        <div class="item" v-for="(item,index) in musicPlaylist" v-bind:class="{ 'isActive':isCurrentSong(index) }" v-on:click="changeSong(index),isPlaylistActive=!isPlaylistActive">
          <p class="title">{{ item.title }}</p>
          <p class="artist">{{ item.artist }}</p>
        </div>

        <p class="debugToggle" v-on:click="toggleDebug()">debug: {{ debug }}</p>

      </div>
      <div class="audioPlayerUI" :class="{'isDisabled': isPlaylistActive}">
        <div class="albumImage">
          <transition name="ballmove" enter-active-class="animated zoomIn" leave-active-class="animated fadeOutDown" mode="out-in">
            <!--<transition name="slide-fade" mode="out-in">-->
            <img alt="" @load="onImageLoaded()" :src="musicPlaylist[currentSong].image" :key="currentSong" ondragstart="return false;" id="playerAlbumArt" >
          </transition>
          <div class="loader" :key="currentSong">Loading...</div>
        </div>
        <div class="albumDetails">
          <transition name="slide-fade" mode="out-in">
            <p class="title" :key="currentSong">{{ musicPlaylist[currentSong].title }}</p>
          </transition>
          <transition name="slide-fade" mode="out-in">
            <p class="artist" :key="currentSong">{{ musicPlaylist[currentSong].artist }}</p>
          </transition>
        </div>

        <div class="playerButtons">
          <a class="button" :class="{'isDisabled':(currentSong==0)}" v-on:click="prevSong()" title="Previous Song"><i class="zmdi zmdi-skip-previous"></i></a>
          <a class="button play" v-on:click="playAudio()" title="Play/Pause Song">
            <transition name="slide-fade" mode="out-in">
              <i class="zmdi" :class="[currentlyStopped ? 'zmdi-stop' : (currentlyPlaying ? 'zmdi-pause-circle' : 'zmdi-play-circle')]" :key="1"></i>
            </transition>
          </a>
          <a class="button" :class="{'isDisabled':(currentSong==musicPlaylist.length-1)}" v-on:click="nextSong()" title="Next Song"><i class="zmdi zmdi-skip-next"></i></a>
        </div>

        <div class="currentTimeContainer" style="text-align:center">
          <span class="currentTime">{{ currentTime | fancyTimeFormat }}</span>
          <span class="totalTime"> {{ trackDuration | fancyTimeFormat }}</span>
          <!--<span style="color:black">({{ currentSong+1 }}/{{ musicPlaylist.length }})</span>-->
        </div>

        <div class="currentProgressBar">
          <div class="currentProgress" :style="{ width: currentProgressBar + '%' }"></div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
interface Music {
  title: string;
  artist: string;
  url: string;
  image: string;
}

const audio = ref();
const imgLoaded = ref<boolean>(false);
const currentlyPlaying = ref<boolean>(false);
const currentlyStopped = ref<boolean>(false);
const currentTime = ref<number>(0);
let checkingCurrentPositionInTrack: NodeJS.Timeout | null = null;
const trackDuration = ref<number>(0);
const currentProgressBar = ref<number>(0);
const isPlaylistActive = ref<boolean>(false);
const currentSong = ref<number>(0);
const debug = ref<boolean>(false);
const musicPlaylist: Music[] = ref<Music[]>([
  {
    title: "Service Bell",
    artist: "Daniel Simion",
    url: "https://soundbible.com/mp3/service-bell_daniel_simion.mp3",
    image: "https://source.unsplash.com/crs2vlkSe98/400x400"
  },
  {
    title: "Meadowlark",
    artist: "Daniel Simion",
    url: "https://soundbible.com/mp3/meadowlark_daniel-simion.mp3",
    image: "https://source.unsplash.com/35bE_njbG9E/400x400"
  },
  {
    title: "Hyena Laughing",
    artist: "Daniel Simion",
    url: "https://soundbible.com/mp3/hyena-laugh_daniel-simion.mp3",
    image: "https://source.unsplash.com/Esax9RaEl2I/400x400"
  },
  {
    title: "Creepy Background",
    artist: "Daniel Simion",
    url: "http://soundbible.com/mp3/creepy-background-daniel_simon.mp3",
    image: "https://source.unsplash.com/j0g8taxHZa0/400x400"
  }
]);
let audioFile = ref<string>("");

const changeSong = (index?: number) => {
  const wasPlaying = currentlyPlaying.value;
  imgLoaded.value = false;
  if (index !== undefined) {
    stopAudio();
    currentSong.value = index;
  }
  audioFile.value = musicPlaylist.value[currentSong.value].url;
  audio.value = new Audio(audioFile.value);
  audio.value.addEventListener("loadedmetadata", function() {
    trackDuration.value = Math.round(this.duration);
  });
  audio.value.addEventListener("ended", handleEnded);
  if (wasPlaying) {
    playAudio();
  }
};

const isCurrentSong = (index: number) => {
  return currentSong.value === index;
};

const getCurrentSong = (currentSong: number) => {
  return musicPlaylist.value[currentSong].url;
};

const playAudio = () => {
  if (
      currentlyStopped.value === true &&
      currentSong.value + 1 === musicPlaylist.value.length
  ) {
    currentSong.value = 0;
    changeSong();
  }
  if (!currentlyPlaying.value) {
    getCurrentTimeEverySecond(true);
    currentlyPlaying.value = true;
    audio.value.play();
  } else {
    stopAudio();
  }
  currentlyStopped.value = false;
};

const stopAudio = () => {
  audio.value.pause();
  currentlyPlaying.value = false;
  pausedMusic();
};

const handleEnded = () => {
  if (currentSong.value + 1 === musicPlaylist.value.length) {
    stopAudio();
    currentlyPlaying.value = false;
    currentlyStopped.value = true;
  } else {
    currentlyPlaying.value = false;
    currentSong.value++;
    changeSong();
    playAudio();
  }
};

const onImageLoaded = () => {
  imgLoaded.value = true;
};

const getCurrentTimeEverySecond = (startStop: boolean) => {
  checkingCurrentPositionInTrack = setTimeout(
      function() {
        currentTime.value = audio.value.currentTime;
        currentProgressBar.value =
            audio.value.currentTime / trackDuration.value * 100;
        getCurrentTimeEverySecond(true);
      },
      1000
  );
};

const pausedMusic = () => {
  if (checkingCurrentPositionInTrack) {
    clearTimeout(checkingCurrentPositionInTrack);
  }
};

const togglePlaylist = () => {
  isPlaylistActive.value = !isPlaylistActive.value;
};

const nextSong = () => {
  if (currentSong.value < musicPlaylist.value.length - 1)
    changeSong(currentSong.value + 1);
};

const prevSong = () => {
  if (currentSong.value > 0) changeSong(currentSong.value - 1);
};

const toggleDebug = () => {
  debug.value = !debug.value;
  document.body.classList.toggle('debug');
};

watchEffect(() => {
  currentTime.value = Math.round(currentTime.value);
});

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.removeEventListener("ended", handleEnded);
    audio.value.removeEventListener("loadedmetadata", handleEnded);

    if (checkingCurrentPositionInTrack) {
      clearTimeout(checkingCurrentPositionInTrack);
    }
  }
});
</script>

<style scoped lang="scss">
.audio-wrapper {
  @import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700");
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

  $primary_color: rgba(0, 0, 0, 0.75);
  $player_width: 20rem;
  $player_padding: 1.5rem;
  $player_border_radius: 0.5rem;

  $button_size: 2rem;

  $anim_duration: 0.5s;

  /* Debugging */
  .debug{
    main * { outline: solid 0.25rem rgba(255,0,0,0.25); }
  }

  * {
    box-sizing: border-box;
  }
  .animated {
    animation-duration: $anim_duration;
  }
  .audioPlayer {
    position: relative;
    background-color: #eceff1;

    min-height: 25rem;
    width: $player_width;

    overflow: hidden;

    padding: $player_padding;
    margin: 0 auto;

    border-radius: $player_border_radius;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

    user-select: none;

    .nav-icon {
      width: 15px;
      height: 12px;

      position: absolute;
      top: ($player_padding)-($player_padding/4);
      left: $player_padding;

      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background: $primary_color;
        border-radius: 6px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
      }
      span:nth-child(1) {
        top: 0px;
      }

      span:nth-child(2) {
        top: 5px;
      }

      span:nth-child(3) {
        top: 10px;
      }

      &.isActive span:nth-child(1) {
        top: 5px;
        transform: rotate(135deg);
      }

      &.isActive span:nth-child(2) {
        opacity: 0;
        left: -60px;
      }

      &.isActive span:nth-child(3) {
        top: 5px;
        transform: rotate(-135deg);
      }
    }
    .audioPlayerList {
      color: $primary_color;
      width: ($player_width)-(2*$player_padding);
      transition: $anim_duration;
      transform: translateX(-200%);
      position: absolute;
      margin-top: $player_padding;
      overflow: auto;
      z-index: 10;
      will-change: transform;

      &.isActive {
        transform: translateX(0);
      }
      .item {
        margin-bottom: 1.5rem;
        border-left: 0.1rem solid transparent;
        transition: 0.2s;

        &:hover {
          padding-left: 0.5rem;
          cursor: pointer;
        }
        .title {
          color: rgba(0, 0, 0, 1);
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }
        .artist {
          color: rgba(0, 0, 0, 0.5);
          font-size: 0.8rem;
        }
        &.isActive {
          border-left-color: black;
          padding-left: 1rem;
        }
      }
      .debugToggle{
        cursor:pointer;
        color:red;
      }
    }
    .audioPlayerUI {
      margin-top: $player_padding;
      will-change: transform, filter;
      transition: $anim_duration;
      &.isDisabled {
        transform: scale(0.75) translateX(100%);
        filter: blur(5px) grayscale(100%);
      }
      .albumDetails {
        text-align: center;
        margin: 2rem 0;

        p {
          margin: 0px;
          &.title {
            font-size: 1rem;
            color: rgba(0, 0, 0, 1);
          }
          &.artist {
            margin-top: 0.5rem;
            font-size: 0.75rem;
            font-weight: none;
            color: $primary_color;
            transition-delay: 100ms;
          }
        }
      }
      .albumImage {
        width: ($player_width)-($player_padding*2);
        height: ($player_width)-($player_padding*2);
        overflow: hidden;
        margin: 0 auto;

        img {
          width: 100%;
          height: 100%;
          z-index: 10;
          object-fit: cover;
          object-position: 50% 50%;
          border-radius:$player_border_radius;
        }
      }
      .playerButtons {
        position: relative;
        margin: 0 auto;
        //margin-bottom: 1.5rem;
        text-align: center;

        .button {
          font-size: $button_size;
          display: inline-block;
          vertical-align: middle;
          padding: 0.5rem;
          margin: 0 0.25rem;
          color: rgba(0, 0, 0, 0.75);
          border-radius: 50%;

          outline: 0;
          text-decoration: none;
          cursor: pointer;
          transition: $anim_duration;

          &.play {
            font-size: 2*$button_size;
            margin: 0 1.5rem;
          }
          &:active {
            opacity: 0.75;
            transform: scale(0.75);
          }
          &.isDisabled {
            color: rgba(0, 0, 0, 0.2);
            cursor: initial;
          }
          &.isDisabled:active {
            transform: none;
          }
        }
      }
      .currentTimeContainer {
        width: 100%;
        height: 1rem;

        display: flex;
        justify-content: space-between;

        .currentTime,
        .totalTime {
          font-size: 0.5rem;
          font-family: monospace;
          color: $primary_color;
        }
      }

      .currentProgressBar {
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        margin:0.75rem 0;
        .currentProgress {
          background-color: $primary_color;
          width: 0px;
          height: 1px;
          transition: 100ms;
        }
      }
    }
  }

  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
  }

  /* data change transitions */
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity $anim_duration;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  /* pen specific formatting */
  body {
    background: #29B6F6;

    color: rgba(255, 255, 255, 0.7);
    font-family: Raleway, sans-serif;

    padding: 3rem;
  }
  .heading {
    text-align: center;
    margin: 0;
    margin: 2rem 0;
    font-family: Inconsolata, monospace;

    h1 {
      color: #ECEFF1;
      margin: 0;
      margin-bottom: 1rem;
      font-size: 1.75rem;
    }
    p {
      margin: 0;
      font-size: 0.85rem;
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      transition: 0.3s;
      text-decoration-style: dotted;
      &:hover {
        color: rgba(255, 255, 255, 1) !important;
      }
      &:visited {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}

</style>
