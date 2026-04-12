<template>
  <UCard variant="subtle" class="w-150 shadow-2xl">
    <UForm :schema="schema" :state="state" @submit="submitHandler" loading-auto>
      <div class="flex flex-col gap-4">
        <p class="font-semibold text-xl text-center">Sign Up</p>
        <USeparator label="Full Name" />
        <div class="flex flex-row gap-2">
          <UFormField class="w-full" label="First Name" name="fname">
            <UInput v-model="state.fname" />
          </UFormField>
          <UFormField class="w-full" label="Middle Name" name="mname">
            <UInput v-model="state.mname" />
          </UFormField>
          <UFormField class="w-full" label="Last Name" name="lname">
            <UInput v-model="state.lname" />
          </UFormField>
        </div>
        <USeparator label="Position and Section" />
        <div class="flex flex-row gap-2">
          <UFormField class="w-full" label="Position" name="position">
            <UInput v-model="state.position" class="w-full" />
          </UFormField>
          <UFormField class="w-full" label="Section" name="sectionId">
            <USelectMenu
              class="w-full"
              :items="list"
              value-key="value"
              label-key="label"
              v-model="state.sectionId"
            />
          </UFormField>
        </div>
        <USeparator label="Credentials" />
        <div class="flex flex-row gap-2">
          <UFormField class="w-full" label="Username" name="username">
            <UInput v-model="state.username" class="w-full" />
          </UFormField>
          <UFormField class="w-full" label="Password" name="password">
            <UInput v-model="state.password" type="password" class="w-full" />
          </UFormField>
          <UFormField class="w-full" label="Confirm Password" name="confirmPassword">
            <UInput v-model="state.confirmPassword" type="password" class="w-full" />
          </UFormField>
        </div>
        <div class="flex flex-row gap-2">
          <UButton
            type="submit"
            class="w-full justify-center"
            label="Sign Up"
            variant="subtle"
            color="success"
          />
          <UButton
            class="w-full justify-center"
            label="Return to Login"
            variant="subtle"
            color="info"
            to="login"
          />
        </div>
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'center-card'
})

import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { list } = useSectionOptions()
const api = useAPI()
const toast = useToast()

const schema = z
  .object({
    fname: z.string('Required').min(4, 'Minimum: 4 characters').trim(),
    mname: z.string('Required').min(4, 'Minimum: 4 characters').trim().optional(),
    lname: z.string('Required').min(4, 'Minimum: 4 characters').trim(),
    position: z.string('Required').min(4, 'Minimum: 4 characters').trim(),
    sectionId: z.number('Required'),
    username: z.string('Required').min(4, 'Minimum: 4 characters').trim(),
    password: z.string('Required').min(4, 'Minimum: 4 characters').trim(),
    confirmPassword: z.string('Required').min(4, 'Minimum: 4 characters').trim()
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Passwords do not match.'
      })
    }
  })

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  fname: undefined,
  mname: undefined,
  lname: undefined,
  position: undefined,
  sectionId: undefined,
  username: undefined,
  password: undefined,
  confirmPassword: undefined
})

const clearState = () => {
  state.fname = undefined
  state.mname = undefined
  state.lname = undefined
  state.position = undefined
  state.sectionId = undefined
  state.username = undefined
  state.password = undefined
  state.confirmPassword = undefined
}

const submitHandler = async (payload: FormSubmitEvent<Schema>) => {
  const { data } = payload
  try {
    const res = await api<Schema>('/auth/register', {
      method: 'POST',
      body: data
    })

    if (res.username) {
      clearState()
      toast.add({
        title: 'Success',
        description: 'Please contact ICTU for activation.',
        color: 'success',
        close: false,
        icon: 'i-svg-spinners-6-dots-rotate'
      })
      setTimeout(() => {
        navigateTo('/login')
      }, 2000)
    }
  } catch (e) {
    toast.add({
      title: 'Error',
      description: 'Something went wrong.',
      color: 'error',
      close: false,
      icon: 'i-svg-spinners-6-dots-rotate'
    })
  }
}
</script>

<style scoped></style>
