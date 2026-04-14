<template>
  <div class="flex flex-row">
    <UButton
      icon="i-material-symbols-edit-note"
      variant="ghost"
      color="info"
      size="sm"
      @click="toggleEdit"
    />
    <USlideover v-model:open="edit" :dismissible="false">
      <template #content>
        <DivisionEdit @toggle="toggleEdit" :row="props.row" @refetch="emits('refetch')" />
      </template>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['refetch'])

interface Division {
  id: number
  divisionName: string
  divisionCode: string
  status: string
}

const props = defineProps<{ row: Division }>()

const edit = ref(false)
const toggleEdit = () => {
  edit.value = !edit.value
}
</script>

<style scoped></style>
