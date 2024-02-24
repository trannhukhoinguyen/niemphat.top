<template>
    <a-space>
      <template v-for="fileSrc in fileSrcSource">
          <PdfItem
            :src="fileSrc.src"
          />
      </template>
    </a-space>
</template>

<script setup>
const fileSrcSource = ref(sutraSource);
const fileSrcSource = computed(() => {
    return sutraSource
        ? vinayaSource
        : sastraSource
});
const sutraSource = [
    {
        type: 'sutra',
        name: 'Kinh Trường Bộ',
        src: 'https://thuvienhoasen.org/images/file/zqfZjip_1ggQAIJ4/kinhtruongbo.pdf',
    }
];
const vinayaSource = [
    {
        type: 'vinaya',
        name: 'Luật',
        src: 'https://phatgiao.org.vn/tu-dien-phat-hoc-online/kinh-luat-luan-k54861.html',
    }
];
const sastraSource = [
    {
        type: 'sastra',
        name: 'Luận',
        src: 'https://phatgiao.org.vn/tu-dien-phat-hoc-online/kinh-luat-luan-k54861.html',
    }
];

</script>

<style lang="scss">

</style>
