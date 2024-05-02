<template>
  <div class="home-page">
    <div class="9-lotuses">
      <!--    <div class="top-row">
      <Lotus top="100px" left="-400px" />
      <Lotus top="100px" left="-200px" />
      <Lotus top="100px" left="0" />
    </div>

    <div class="middle-row">
      <Lotus top="250px" left="-400px" />
      <Lotus top="250px" left="-200px" />
      <Lotus top="250px" left="0" />
    </div>

    <div class="bottom-row">
      <Lotus top="400px" left="-400px" />
      <Lotus top="400px" left="-200px" />
      <Lotus top="400px" left="0" />
    </div>-->
    </div>


    <div class="home">
        <MusicPlayer />
        <SongList :songs="getSongs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../stores/Home'
import SongList from '../components/Players/Audio/Music/SongList.vue'
import MusicPlayer from '../components/Players/Audio/Music/MusicPlayer.vue'

const homeStore = useHomeStore()
const { getSongs } = storeToRefs(homeStore)
</script>

<style scoped lang="scss">
.home-page {
  .home {
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1600px;
    max-height: 824px;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      max-height: initial;
      justify-content: center;
    }
  }
}
</style>
