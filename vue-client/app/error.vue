<template>
  <UError
    :error="error"
    redirect="/"
    :ui="{
      statusCode: 'text-5xl'
    }"
    class=""
  >
    <template #statusMessage> You've strayed too far. </template>
  </UError>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<style scoped></style>
