<template>
  <USidebar
    variant="floating"
    v-model:open="open"
    collapsible="icon"
    :ui="{
      gap: 'h-[calc(100%-var(--ui-header-height))]',
      container: 'absolute top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))]'
    }"
  >
    <UNavigationMenu
      highlight
      highlight-color="primary"
      :items="items"
      orientation="vertical"
      :ui="{ link: 'p-1.5 overflow-hidden' }"
    />
  </USidebar>
</template>

<script setup lang="ts">
const open = defineModel('open', { required: true, default: true })

import type { NavigationMenuItem } from '@nuxt/ui'
const items: NavigationMenuItem[] = [
  {
    label: 'Profile',
    icon: 'i-material-symbols-account-circle',
    to: '/'
  },
  {
    label: 'Administrator',
    icon: 'i-lucide-folders',
    children: [
      {
        label: 'Divisions',
        icon: 'i-lucide-folder-closed',
        to: '/divisions'
      },
      {
        label: 'Sections',
        icon: 'i-lucide-folder-closed',
        to: '/sections'
      },
      {
        label: 'Profiles',
        icon: 'i-lucide-folder-closed',
        to: '/profiles'
      },
      {
        label: 'Systems',
        icon: 'i-lucide-folder-closed',
        to: '/systems'
      }
    ]
  }
]
</script>

<style scoped></style>
