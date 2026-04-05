<template>
  <Button label="TEST" @click="clickHandler" />
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import { useQuery } from '@tanstack/vue-query'
import api from '@/lib/api'

const { refetch } = useQuery({
  queryKey: ['test'],
  queryFn: async () => {
    return await api.post('/auth/logout', '', { withCredentials: true })
  },
  enabled: false,
})

const clickHandler = () => {
  refetch()
}
</script>

<style scoped></style>
