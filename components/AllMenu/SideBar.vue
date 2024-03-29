<template>
  <div class="side-bar-component">
    <UVerticalNavigation :links="links" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    badge: 100,
  }, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation',
  }, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`,
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette',
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb',
        to: '/components/command-palette',
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle',
    icon: 'i-heroicons-question-mark-circle',
  }]
]
</script>

<style scoped lang="scss">
.side-bar-component {
  max-width: 250px;
}
</style>
