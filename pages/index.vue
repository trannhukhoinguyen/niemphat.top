<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
});
const appConfig = useAppConfig()

console.log(appConfig.theme)
</script>
