<template>
  <div class="bottom-bar-component">
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
  },
  {
    label: "Installation",
    icon: "i-heroicons-home",
    to: "/getting-started/installation",
  },
  {
    label: "Horizontal Navigation",
    icon: "i-heroicons-chart-bar",
    to: `${route.path.startsWith("/dev") ? "/dev" : ""}/components/horizontal-navigation`,
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
    to: "/components/command-palette",
  },
];
</script>

<style scoped lang="scss">
.bottom-bar-component {
  width: 100vw;
  max-height: 150px;
}
</style>
