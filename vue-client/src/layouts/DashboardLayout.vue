<template>
  <div class="flex flex-col">
    <TopMenu @toggle="toggleSide()" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import TopMenu from './TopMenu.vue'
import { useToggle } from '@vueuse/core'

const [showSide, toggleSide] = useToggle(false)

watch(showSide, () => {
  console.log('test')
})
</script>

<style scoped></style>
