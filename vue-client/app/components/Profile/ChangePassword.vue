<template>
  <UCard class="flex-1 shadow-md">
    <template #header>
      <span class="font-semibold text-xl"> Change Password </span>
    </template>
    <template #default>
      <UForm :state="state" :schema="schema" @submit="submitHandler" loading-auto>
        <div class="flex flex-col gap-5 py-4">
          <UFormField class="w-full" label="Old Password" name="newPassword">
            <UInput
              v-model="state.oldPassword"
              class="w-full"
              :type="showOldPass ? 'text' : 'password'"
            >
              <template #trailing>
                <UButton
                  :icon="
                    showOldPass
                      ? 'i-material-symbols-visibility-off-outline-rounded'
                      : 'i-material-symbols-visibility-outline'
                  "
                  variant="link"
                  @click="
                    () => {
                      showOldPass = !showOldPass
                    }
                  "
                />
              </template>
            </UInput>
          </UFormField>
          <UFormField class="w-full" label="New Password" name="newPassword">
            <UInput
              v-model="state.newPassword"
              class="w-full"
              :type="showNewPass ? 'text' : 'password'"
            >
              <template #trailing>
                <UButton
                  :icon="
                    showNewPass
                      ? 'i-material-symbols-visibility-off-outline-rounded'
                      : 'i-material-symbols-visibility-outline'
                  "
                  variant="link"
                  @click="
                    () => {
                      showNewPass = !showNewPass
                    }
                  "
                />
              </template>
            </UInput>
          </UFormField>
          <UFormField class="w-full" label="Confirm Password" name="confirmPassword">
            <UInput
              v-model="state.confirmPassword"
              class="w-full"
              :type="showConPass ? 'text' : 'password'"
            >
              <template #trailing>
                <UButton
                  :icon="
                    showConPass
                      ? 'i-material-symbols-visibility-off-outline-rounded'
                      : 'i-material-symbols-visibility-outline'
                  "
                  variant="link"
                  @click="
                    () => {
                      showConPass = !showConPass
                    }
                  "
                />
              </template>
            </UInput>
          </UFormField>
          <div class="flex flex-row gap-5">
            <UButton
              type="submit"
              class="w-full justify-center"
              variant="subtle"
              label="Change Password"
              color="success"
            />
          </div>
        </div>
      </UForm>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const api = useAPI()
const toast = useToast()

const schema = z
  .object({
    oldPassword: z.string('Required'),
    newPassword: z.string('Required'),
    confirmPassword: z.string('Required')
  })
  .superRefine((val, ctx) => {
    if (val.newPassword !== val.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Passwords do not match'
      })
    }
  })

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  oldPassword: undefined,
  newPassword: undefined,
  confirmPassword: undefined
})

const resetFormState = () => {
  state.oldPassword = undefined
  state.newPassword = undefined
  state.confirmPassword = undefined
}

const showOldPass = ref(false)
const showNewPass = ref(false)
const showConPass = ref(false)

const submitHandler = async (payload: FormSubmitEvent<Schema>) => {
  const { data: body } = payload
  try {
    const res = await api('/users/change_password', {
      method: 'PATCH',
      body
    })
    toast.add({
      title: 'Success',
      description: 'Password has been changed.',
      color: 'success',
      close: false,
      icon: 'i-material-symbols-person-check-rounded'
    })
  } catch (e) {
    toast.add({
      title: 'Error',
      description: 'Something went wrong.',
      color: 'error',
      close: false,
      icon: 'i-material-symbols-error-circle-rounded'
    })
  }
  resetFormState()
}
</script>

<style scoped></style>
