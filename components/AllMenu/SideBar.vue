<template>
  <div class="side-bar-component">
    <UVerticalNavigation :links="leftBarlinks" />
  </div>
</template>

<script setup lang="ts">
const leftBarlinks = [
  [
    {
      label: 'Niệm Phật',
      icon: 'i-heroicons-chart-bar',
      to: '/niem-phat',
    },
    {
      label: 'Thiền',
      icon: 'i-heroicons-chart-bar',
      to: '/zen',
    },
    {
      label: 'Thiền Đốn Ngộ',
      icon: 'i-heroicons-bolt',
      to: '/zen/sudden-enlightenment-zen',
    },    {
      label: 'Khán Thoại Đầu',
      icon: 'i-heroicons-chart-bar',
      to: '/zen/sudden-enlightenment/',
    },
    {
      label: 'Sám Hối',
      icon: 'i-heroicons-chart-bar',
      to: '/sam-hoi',
    },
    {
      label: 'Công Án',
      icon: 'i-heroicons-chart-bar',
      to: '/zen/sudden-enlightenment/koans',
    },
  ],
  [
    {
      label: 'Xem / Nghe Pháp',
      icon: 'i-heroicons-light-bulb',
      to: '/components/command-palette',
    },
    {
      label: 'Download Nhanh',
      icon: 'i-heroicons-down-arrow',
      to: '/components/command-palette',
    },
    {
      label: 'Hỏi / Đáp',
      icon: 'i-heroicons-question-mark-circle',
      to: '/components/command-palette',
    }
  ]
];
</script>

<style scoped lang="scss">
.side-bar-component {
  max-width: 250px;
}
</style>
