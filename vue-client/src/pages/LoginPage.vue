<template>
  <div class="flex h-dvh items-center justify-center">
    <Card class="border-surface-200 min-w-110 border shadow-2xl!">
      <template #title>
        <div class="py-3">
          <span class="font-bold">Sign In</span>
        </div>
      </template>
      <template #content>
        <LoginForm />
      </template>
      <template #footer>
        <div class="pt-4 text-sm font-semibold text-gray-500 italic">
          No account?
          <RouterLink
            to="/register"
            class="text-primary hover:text-primary-600 active:text-primary-800 transition-colors duration-300"
            >Sign up</RouterLink
          >
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/features/login/LoginForm.vue'
import { Card } from 'primevue'
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
