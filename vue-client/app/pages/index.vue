<template>
  <UCard class="h-full shadow-2xl">
    <div class="flex flex-col gap-5">
      <div class="text-center text-5xl font-semibold tracking-tight">
        Welcome back, {{ data?.fname }}
      </div>
      <div class="flex sm:flex-row flex-col gap-5">
        <ProfileEditProfile />
        <UCard class="flex-1">Credentials</UCard>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Profile {
  id: number
  fname: string
  mname: null
  lname: string
  position: string
  username: string
  status: string
  createdAt: Date
  updatedAt: Date
  sectionId: number
}

const { data } = useFetchAPI<Profile>('/auth/verify', { key: 'profile' })
</script>

<style scoped></style>
