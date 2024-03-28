<template>
  <div class="bottom-bar-component">
      <CurvedBottomNavigation
              foreground-color='#42A5F5'
              badge-color='#FBC02D'
              background-color='#FFFFFF'
              icon-color='#0000008A'
              :options="options"
              v-model="selected"
      />
  </div>
</template>

<script setup>
import { CurvedBottomNavigation } from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";

const selected = 1;
const options = [
    {
        id: 1,
        icon: "i-heroicons-light-bulb",
        title: "Home",
        childs: [{ id: 101, icon: "fas fa-gifts", title: "Gifts", badge: 7 }],
    },
    { id: 2, icon: "fas fa-wallet", title: "Wallet" },
    {
        id: 3,
        icon: "i-ph-rocket-launch",
        title: "Setting",
        childs: [{ id: 301, icon: "fas fa-ticket-alt", title: "Tickets" }],
    },
    { id: 4, icon: "fas fa-bell", title: "Notification", badge: 15 },
];
</script>

<style scoped lang="scss">
.bottom-bar-component {

}
</style>
