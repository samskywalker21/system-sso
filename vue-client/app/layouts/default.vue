<template>
  <div class="flex flex-col flex-1">
    <Header @toggle="toggle" />
    <div class="flex flex-1 min-h-0">
      <Sidebar v-model:open="open" />
      <UMain class="p-5 flex-1">
        <slot />
      </UMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'

const open = ref(true)

const toggle = () => {
  open.value = !open.value
}
</script>

<style scoped></style>
