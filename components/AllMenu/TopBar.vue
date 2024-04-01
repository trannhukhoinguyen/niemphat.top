<template>
  <div class="top-bar-component" style="left: 0; margin-right: 200px">
    <UContainer>
      <UHorizontalNavigation :links="topBarLinks" class="border-b border-gray-200 dark:border-gray-800" />
    </UContainer>

    <UContainer style="float: right">
      <UDropdown :items="profileDropdown" :popper="{ placement: 'bottom-start' }">
        <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            size="2xs"
        />
        <UButton color="white" label="Profile" trailing-icon="i-heroicons-chevron-down-20-solid" />
      </UDropdown>
    </UContainer>


  </div>
</template>

<script setup lang="ts">

const topBarLinks = [
  [
    {
      label: 'Home',
      icon: 'i-heroicons-home',
      to: '/home',
    }
  ],
  [
    {
      label: 'Kinh Lăng Nghiêm',
      icon: 'i-heroicons-chart-bar',
      to: '/kinh-lang-nghiem',
    },
    {
      label: 'Kinh Pháp Hoa',
      icon: 'i-heroicons-chart-bar',
      to: '/kinh-phap-hoa',
    },
    {
      label: 'Kinh Hoa Nghiêm',
      icon: 'i-heroicons-chart-bar',
      to: '/kinh-hoa-nghiem',
    },
    {
      label: 'Lương Hoàng Sám',
      icon: 'i-heroicons-chart-bar',
      to: '/kinh-hoa-nghiem',
    },
  ],
  [
    {
      label: 'Thời Khóa Tu',
      icon: 'i-heroicons-light-bulb',
      to: '/components/command-palette',
    },
  ]
];

const profileDropdown = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
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
];
</script>

<style scoped lang="scss">
.top-bar-component {
  //width: 100vw;
}
</style>


