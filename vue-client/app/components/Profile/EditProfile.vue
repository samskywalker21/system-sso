<template>
  <UCard class="flex-1 shadow-md">
    <template #header>
      <span class="font-semibold text-xl"> Edit your Profile </span>
    </template>
    <template #default>
      <UForm
        :schema="schema"
        :state="state"
        @submit="submitHandler"
        loading-auto
        :disabled="edit ? false : true"
      >
        <div class="flex flex-col gap-5">
          <div class="flex lg:flex-row flex-col justify-between gap-4">
            <UFormField label="First Name" name="fname" class="flex-1">
              <UInput class="w-full" v-model="state.fname" />
            </UFormField>
            <UFormField label="Middle Name" name="mname" class="flex-1">
              <UInput class="w-full" v-model="state.mname" />
            </UFormField>
            <UFormField label="Last Name" name="lname" class="flex-1">
              <UInput class="w-full" v-model="state.lname" />
            </UFormField>
          </div>
          <USeparator />
          <div class="flex sm:flex-row flex-col gap-4">
            <UFormField label="Position" name="position" class="w-full">
              <UInput v-model="state.position" class="w-full" />
            </UFormField>
            <UFormField label="Username" name="username" class="w-full">
              <UInput v-model="state.username" class="w-full" />
            </UFormField>
          </div>
          <USeparator />
          <UFormField label="Section" name="sectionId" class="w-full">
            <USelectMenu
              :items="list"
              value-key="value"
              label-key="label"
              v-model="state.sectionId"
              class="w-full"
            />
          </UFormField>
          <div class="flex sm:flex-row flex-col gap-4" v-if="edit">
            <UButton
              type="submit"
              class="w-full text-center justify-center"
              label="Save"
              variant="subtle"
              color="success"
            />
            <UButton
              class="w-full text-center justify-center"
              label="Cancel"
              variant="subtle"
              color="info"
              @click="toggleEdit"
            />
          </div>
          <div class="flex flex-row justify-between gap-4" v-else>
            <UButton
              class="w-full text-center justify-center"
              label="Edit"
              variant="subtle"
              @click="toggleEdit"
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

interface Profile {
  id: number
  fname: string
  mname: null
  lname: string
  position: string
  username: string
  sectionId: number
}

const api = useAPI()
const toast = useToast()

const schema = z.object({
  fname: z.string('Required').min(2, 'Minimum: 2 characters').trim(),
  mname: z.string('Required').min(2, 'Minimum: 2 characters').trim().optional(),
  lname: z.string('Required').min(2, 'Minimum: 2 characters').trim(),
  position: z.string('Required').min(2, 'Minimum: 2 characters').trim(),
  username: z.string('Required').min(2, 'Minimum: 2 characters').trim(),
  sectionId: z.number('Required')
})

type Schema = z.infer<typeof schema>

const { data } = useFetchAPI<Profile>('/auth/verify', { key: 'profile' })
const { list } = useSectionOptions()

const edit = ref(false)
const state = reactive<Partial<Schema>>({
  fname: undefined,
  mname: undefined,
  lname: undefined,
  position: undefined,
  username: undefined,
  sectionId: undefined
})

watch(
  data,
  () => {
    Object.assign(state, {
      fname: data.value?.fname ?? undefined,
      mname: data.value?.mname ?? undefined,
      lname: data.value?.lname ?? undefined,
      position: data.value?.position ?? undefined,
      username: data.value?.username ?? undefined,
      sectionId: data.value?.sectionId ?? undefined
    })
  },
  { immediate: true }
)

const toggleEdit = () => {
  edit.value = !edit.value
}

const submitHandler = async (payload: FormSubmitEvent<Schema>) => {
  const { data: body } = payload
  try {
    const res = await api<Profile>(`/users/update/${data.value?.id}`, {
      method: 'PATCH',
      body
    })
    toast.add({
      title: 'Success',
      description: 'Profile has been updated.',
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
  await refreshNuxtData('profile')
  toggleEdit()
}
</script>

<style scoped></style>
