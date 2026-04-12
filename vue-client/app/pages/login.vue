<template>
  <UCard class="min-w-90 shadow-2xl" variant="subtle">
    <UAuthForm
      title="Welcome"
      :fields="fields"
      :submit="{
        label: 'Sign In',
        variant: 'subtle',
        class: 'font-semibold'
      }"
      :schema="schema"
      :loading-auto="true"
      @submit="onSubmit"
      :disabled="status === 'pending' || status === 'success' ? true : false"
    />
    <template #footer>
      <p class="text-center">
        No account yet?
        <ULink
          to="register"
          class="text-primary-500 font-semibold hover:text-primary-300 transition-colors duration-300"
          >Sign Up</ULink
        >
      </p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'center-card'
})

import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

const { status, login } = useLogin()
const toast = useToast()

const schema = z.object({
  username: z.string('Required'),
  password: z.string('Required')
})

type Schema = z.infer<typeof schema>

const fields = ref<AuthFormField[]>([
  {
    name: 'username',
    type: 'text',
    label: 'Username'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])

const onSubmit = async (payload: FormSubmitEvent<Schema>) => {
  const { data } = payload
  await login(data)

  if (status.value === 'success') {
    toast.add({
      title: 'Success',
      description: 'Redirecting to Dashboard.',
      color: 'success',
      close: false,
      icon: 'i-svg-spinners-6-dots-rotate'
    })

    setTimeout(() => {
      navigateTo('/')
    }, 2000)
  }

  if (status.value === 'fail') {
    toast.add({
      title: 'Error',
      description: 'Invalid credentials.',
      color: 'error',
      close: false,
      icon: 'i-material-symbols-fingerprint-off-rounded'
    })
  }
}
</script>

<style scoped></style>
