<template>
  <div
    style="padding: 24px"
    class="twelve-cause-card"
    title="Thập Nhị Nhân Duyên (12-linked chain of causation)"
  >
    <UCarousel
      ref="carouselRef"
      :items="items"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
        indicators: {
          wrapper: 'relative bottom-0 mt-4',
        },
      }"
      indicators
      class="w-64 mx-auto"
    >
      <template #default="{ item }">
        <img
          :src="item.src"
          :title="item.title"
          class="w-full"
          draggable="false"
        />
      </template>

      <template #indicator="{ onClick, page, active }">
        <UButton
          :label="String(page)"
          :variant="active ? 'solid' : 'outline'"
          size="2xs"
          class="rounded-full min-w-6 justify-center"
          @click="onClick(page)"
        />
      </template>
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: "Vô Minh", src: "/assets/images/icons/vo_minh.png" },
  { title: "Hành", src: "/assets/images/icons/hanh.png" },
  { title: "Thức", src: "/assets/images/icons/thuc.png" },
  { title: "Danh Sắc", src: "/assets/images/icons/danh_sac.png" },
  { title: "Lục Nhập", src: "/assets/images/icons/luc_nhap.png" },
  { title: "Xúc", src: "/assets/images/icons/xuc.png" },
  { title: "Thọ", src: "/assets/images/icons/tho.png" },
  { title: "Ái", src: "/assets/images/icons/ai.png" },
  { title: "Thủ", src: "/assets/images/icons/thu.png" },
  { title: "Hữu", src: "/assets/images/icons/huu.png" },
  { title: "Sanh", src: "/assets/images/icons/sanh.png" },
  { title: "Lão Tử", src: "/assets/images/icons/lao_tu.png" },
];
const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 2000);
});
</script>

<style scoped lang="scss">
.twelve-cause-card {
}
</style>
