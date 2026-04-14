<template>
  <div class="flex flex-col h-dvh py-5 px-10">
    <div class="flex flex-col h-dvh justify-center pb-50">
      <UForm :state="state" :schema="schema" @submit="editHandler">
        <div class="flex flex-col gap-5">
          <UFormField label="Division Name" name="divisionName">
            <UInput class="w-full" v-model="state.divisionName" />
          </UFormField>
          <UFormField label="Division Code" name="divisionCode">
            <UInput class="w-full" v-model="state.divisionCode" />
          </UFormField>
          <UFormField label="Status" name="status">
            <USelect
              class="w-full"
              v-model="state.status"
              value-key="value"
              label-key="label"
              :items="items"
            />
          </UFormField>
          <UButton
            type="submit"
            class="w-full justify-center"
            label="Edit"
            variant="subtle"
            color="success"
          />
          <UButton
            class="w-full justify-center"
            label="Cancel"
            variant="subtle"
            color="error"
            @click="emits('toggle')"
          />
        </div>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Division {
  id: number
  divisionName: string
  divisionCode: string
  status: string
}

import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const props = defineProps<{ row: Division }>()
const emits = defineEmits(['toggle', 'refetch'])
const api = useAPI()
const toast = useToast()

const schema = z.object({
  divisionName: z.string('Required').min(1, 'Required'),
  divisionCode: z.string('Required').min(1, 'Required'),
  status: z.string('Required').min(1, 'Required')
})

const state = reactive<Partial<Division>>({
  divisionName: props.row.divisionName,
  divisionCode: props.row.divisionCode,
  status: props.row.status
})

const items = [
  {
    label: 'Active',
    value: 'A'
  },
  {
    label: 'Inactive',
    value: 'I'
  }
]

const editHandler = async (payload: FormSubmitEvent<Partial<Division>>) => {
  const { data: body } = payload
  try {
    await api(`/division/update/${props.row.id}`, { method: 'PATCH', body })
    emits('refetch')
    emits('toggle')
    toast.add({
      title: 'Success',
      description: 'Division has been updated.',
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
}
</script>

<style scoped></style>
