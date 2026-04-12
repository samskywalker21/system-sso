<template>
  <UHeader toggle-side="left" :ui="{ container: 'px-4!' }" title="Single Sign-On Service">
    <template #toggle>
      <UButton
        icon="i-lucide-panel-left"
        color="neutral"
        variant="ghost"
        aria-label="Toggle sidebar"
        @click="$emit('toggle')"
      />
    </template>
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<script setup lang="ts"></script>

<style scoped></style>
