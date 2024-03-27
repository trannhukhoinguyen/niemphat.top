<template>
    <UContainer v-if="post">
        <h1 class="font-bold text-xl mt-12 md:mt-24">
            {{ post.title }}
        </h1>
        <div class="flex flex-row gap-1 mt-2">
            <UBadge v-for="label in post.dishTypes" :label="label" :variant="'subtle'" />
        </div>
        <section class="mt-4 flex flex-col md:flex-row-reverse gap-4 w-full">
            <NuxtImg v-if="post.image" :src="post.image" :alt="post.title" class="object-cover w-full" v-bind="post.image.match(/-(?<width>\d+)x(?<height>\d+)\./)?.groups" />
            <p class="text-lg max-w-[40ch]" v-html="post.summary" />
        </section>
        <div class="flex flex-col md:flex-row gap-2 md:gap-8">
            <section class="py-2 md:py-8 min-w-12">
                <div class="flex flex-col md:flex-row justify-between md:items-center">
                    <h2 class="text-lg">Ingredients</h2>
                    <label class="flex flex-row md:flex-row-reverse items-center gap-2 mt-2 text-sm">
                        <UToggle v-model="metric" :aria-label="`Switch to ${metric ? 'US' : 'metric'} units`" />
                        metric
                    </label>
                </div>
                <UTable class="mt-2" :rows="post.extendedIngredients" :columns="columns">
                    <template #name-data="{ row }">
            <span class="flex flex-row gap-2 items-center">
              <NuxtImg v-if="row.image" provider="spoonacular" :src="row.image" :height="20" :width="20" :alt="`Image of ${row.name}`" />
              {{ row.name }}
              ({{ [row.measures[unit].amount, row.measures[unit].unitLong].filter(Boolean).join(' ') }})
            </span>
                    </template>
                </UTable>
            </section>
            <section class="py-2 md:py-8">
                <h2 class="text-lg">Steps</h2>
                <ol class="flex flex-col gap-1 md:gap-4 mt-5 w-full max-w-[60ch]">
                    <li v-for="{ number, step } in post.analyzedInstructions?.[0].steps" class="flex items-baseline gap-2">
            <span class="flex-shrink-0 inline-flex items-center justify-center rounded-full text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 font-bold h-5 w-5">
              {{ number }}
            </span>
                        {{ step }}
                    </li>
                </ol>
            </section>
        </div>
        <UButton external :to="post.sourceUrl" class="mt-4 font-bold mb-24">
            View original post on {{ post.sourceName }}
        </UButton>
    </UContainer>
</template>

<script setup lang="ts">
const { data: post } = await useFetch('/api/posts', {
    transform: data => data[Math.random() * data.length | 0]
})

const columnsToShow: Array<keyof InternalApi['/api/posts']['get'][number]['extendedIngredients'][number]> = ['name']

const columns = columnsToShow.map(col => ({ key: col, label: col }))

const metric = ref(true)
const unit = computed(() => metric.value ? 'metric' : 'us')

useServerHead({
    htmlAttrs: {
        lang: 'en',
    },
})

useServerSeoMeta({
    title: post.value!.title,
    description: post.value!.summary,
    ogTitle: post.value!.title,
    ogDescription: post.value!.summary,
    ogImage: post.value!.image,
    twitterCard: '/assets/images/tay-phuong-cuc-lac/tay-phuong-cuc-lac',
    ogUrl: 'https://niemphat.top'
})
</script>

<style>
p a {
    @apply text-primary hover:underline font-bold;
}
</style>
