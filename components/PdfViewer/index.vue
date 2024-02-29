<template>
    <a-space class="pdf-viewer">
      <template v-for="file in fileSource">
          <PdfItem
            :fileSrc="file.src"
          />
      </template>
    </a-space>
</template>

<script setup>


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
const fileSource = ref(sutraSource);
</script>

<style scoped lang="scss">

</style>
