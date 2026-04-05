<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4">
      <Message v-if="isError" severity="error">Credentials are invalid.</Message>
      <div class="flex flex-col gap-2">
        <FloatLabel variant="in">
          <InputText
            id="username"
            type="text"
            fluid
            size="small"
            v-model="username"
            :="usernameProps"
            :invalid="errors.username?.length ? true : false"
          />
          <label for="username">Username</label>
        </FloatLabel>
        <Message v-if="errors.username?.length" severity="error" variant="simple" size="small">{{
          errors.username
        }}</Message>
      </div>
      <div class="flex flex-col gap-2">
        <FloatLabel variant="in">
          <InputText
            id="password"
            type="password"
            fluid
            size="small"
            v-model="password"
            :="passwordProps"
            :invalid="errors.username?.length ? true : false"
          />
          <label for="password">Password</label>
        </FloatLabel>
        <Message v-if="errors.password?.length" severity="error" variant="simple" size="small">{{
          errors.password
        }}</Message>
      </div>
      <Button type="submit" label="Sign In" fluid size="small" :loading="isPending" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { FloatLabel, InputText, Button, Message } from 'primevue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/vue-query'
import api from '@/lib/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const { isError, isPending, mutate } = useMutation({
  mutationKey: ['auth'],
  mutationFn: async (data: z.infer<typeof loginSchema>) => {
    return await api.post('/auth/login', data, { withCredentials: true })
  },
  onSuccess() {
    router.push('/home')
  },
})

const loginSchema = z.object({
  username: z.string().nonempty('Username must not be empty.'),
  password: z.string().nonempty('Password must not be empty.'),
})

const { errors, defineField, handleSubmit, resetForm } = useForm({
  name: 'login-form',
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    username: '',
    password: '',
  },
})

const [username, usernameProps] = defineField('username')
const [password, passwordProps] = defineField('password')

const onSubmit = handleSubmit((values) => {
  mutate(values)
  resetForm()
})
</script>

<style scoped></style>
