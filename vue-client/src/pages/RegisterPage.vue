<template>
  <div class="flex h-dvh items-center justify-center">
    <Card class="border-surface-200 min-w-125 border shadow-2xl!">
      <template #title>
        <div class="py-3">
          <span class="font-bold">Sign Up</span>
        </div>
      </template>
      <template #content>
        <RegisterForm />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '@/features/register/RegisterForm.vue'
import { Card } from 'primevue'
</script>

<style scoped></style>
