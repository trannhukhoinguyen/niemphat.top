<template>
  <div class="side-bar-component">
    <UVerticalNavigation :links="leftBarlinks">
      <template #icon> &#68181; </template>
    </UVerticalNavigation>
  </div>
</template>

<script setup lang="ts">
const leftBarlinks = [
  [
    {
      label: "Niệm Phật",
      to: "/niem-phat",
    },
    {
      label: "Thiền",
      to: "/zen",
    },
    {
      label: "Thiền Đốn Ngộ",
      to: "/zen/sudden-enlightenment-zen",
    },
    {
      label: "Khán Thoại Đầu",
      to: "/zen/sudden-enlightenment/",
    },
    {
      label: "Sám Hối",
      to: "/sam-hoi",
    },
    {
      label: "Công Án",
      to: "/zen/sudden-enlightenment/koans",
    },
  ],
  [
    {
      label: "Xem / Nghe Pháp",
      to: "/components/command-palette",
    },
    {
      label: "Download Nhanh",
      to: "/components/command-palette",
    },
    {
      label: "Hỏi / Đáp",
      to: "/components/command-palette",
    },
  ],
];
</script>

<style scoped lang="scss">
.side-bar-component {
  max-width: 250px;
}
</style>
