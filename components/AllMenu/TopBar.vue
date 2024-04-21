<template>
  <div class="top-bar-component">
    <UContainer>
      <UHorizontalNavigation :links="topBarLinks" class="border-b border-gray-200 dark:border-gray-800">
          <template #icon="{ link }">
              <span class="group-hover:text-primary relative">{{ link?.icon }} &#68181;</span>
          </template>
          <template #default="{ link }">
              <span class="group-hover:text-primary relative">{{ link?.label }}</span>
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
    },
    {
      label: 'Theme',
    },
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
  margin-right: 0;
  .max-w-7xl {
    max-width: 100%;
  }
  @media (min-width: 1024px) {
    .lg\:px-8 {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 640px) {
    .sm\:px-6 {
      padding-left: 0;
      padding-right: 0;
    }
    .px-4 {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>


