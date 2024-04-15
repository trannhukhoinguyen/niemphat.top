<template>
  <div class="top-bar-component" style="left: 0; margin-right: 200px">
    <UContainer>
      <UHorizontalNavigation :links="topBarLinks" class="border-b border-gray-200 dark:border-gray-800">
          <template #icon>
              <template v-if="true">&#68181;</template>
              <template v-if="topBarLinks.length">&#129367;</template>
          </template>
          <template #default="{ link }">
              <span class="group-hover:text-primary relative">{{ link.label }}</span>
          </template>
      </UHorizontalNavigation>
      <ClientOnly>
          <UButton
                  :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                  color="gray"
                  variant="ghost"
                  aria-label="Theme"
                  @click="isDark = !isDark"
          />
          <template #fallback>
              <div class="w-8 h-8" />
          </template>
      </ClientOnly>
    </UContainer>

    <UContainer>
<!--      <UDropdown :items="profileDropdown" :popper="{ placement: 'bottom-start' }">
        <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            size="2xs"
        />
        <UButton color="white" label="Profile" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>-->

    </UContainer>


  </div>
</template>

<script setup lang="ts">
const topBarLinks = [
  [
    {
      label: 'Home',
      to: '/home',
    }
  ],
  [
    {
      label: 'Kinh Lăng Nghiêm',
      to: '/sutras/kinh-lang-nghiem',
    },
    {
      label: 'Kinh Diệu Pháp Liên Hoa',
      to: '/sutras/the-wonderful-dharma-of-lotus-sutra',
    },
    {
      label: 'Kinh Hoa Nghiêm',
      to: '/sutras/kinh-hoa-nghiem',
    },
    {
      label: 'Lương Hoàng Sám',
      to: '/repentances/compassionate-water-repentance-ritual',
    },
  ],
  [
    {
      label: 'Thời Khóa Tu',
      to: '/components/command-palette',
    },
    {
      label: 'Download / Tải xuống',
      to: '/download-buddhism-documents',
    },
  ]
];

/*const profileDropdown = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }],
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
];*/

// COLOR-MODE
const colorMode = useColorMode()
const isDark = computed({
    get () {
        return colorMode.value === 'dark'
    },
    set () {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<style scoped lang="scss">
.top-bar-component {
  width: 100vw;
  max-height: 150px;
}
</style>


