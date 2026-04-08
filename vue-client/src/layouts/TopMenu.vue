<template>
  <div>
    <Menubar class="h-12! rounded-none! pl-5!">
      <template #start>
        <div class="flex flex-row justify-center">
          <i class="pi pi-bars" style="font-size: larger" @click="$emit('toggle')" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { Menubar } from 'primevue'

const iconClick = () => {
  console.log('Trigger')
}
</script>

<style scoped></style>
