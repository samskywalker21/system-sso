<template>
  <form @submit.prevent="submitHandler">
    <div class="flex w-full flex-col">
      <Divider align="left" type="solid">
        <p class="font-bold font-stretch-extra-expanded">Full Name</p>
      </Divider>
      <!-- Full Name Input Group -->
      <div class="flex flex-row gap-2">
        <div class="flex w-full flex-col gap-1">
          <label for="fname">First Name</label>
          <InputText
            id="fname"
            type="text"
            size="small"
            fluid
            v-model="fname"
            :="fnameProps"
            :invalid="errors.fname?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.fname?.length">{{
            errors.fname
          }}</Message>
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="mname">Middle Name</label>
          <InputText
            id="mname"
            type="text"
            size="small"
            fluid
            v-model="mname"
            :="mnameProps"
            :invalid="errors.mname?.length ? true : false"
          />
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="lname">Last Name</label>
          <InputText
            id="lname"
            type="text"
            size="small"
            fluid
            v-model="lname"
            :="lnameProps"
            :invalid="errors.lname?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.lname?.length">{{
            errors.lname
          }}</Message>
        </div>
      </div>
      <Divider align="left" type="solid">
        <p class="font-bold font-stretch-extra-expanded">Position & Section</p>
      </Divider>
      <!-- Position and Section Input Group -->
      <div class="flex flex-row gap-2">
        <div class="flex w-full flex-col gap-1">
          <label for="position">Position</label>
          <InputText
            id="position"
            type="text"
            size="small"
            fluid
            v-model="position"
            :="positionProps"
            :invalid="errors.position?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.position?.length">{{
            errors.position
          }}</Message>
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="section">Section</label>
          <Select
            id="section"
            size="small"
            :loading="isPending"
            v-model="sectionId"
            :="sectionIdProps"
            :invalid="errors.sectionId?.length ? true : false"
            :options="groupedSections"
            option-label="label"
            option-value="value"
            option-group-label="groupLabel"
            option-group-children="items"
            filter
          >
            <template #optiongroup="slotProps">
              <Divider align="left" class="p-0">
                {{ slotProps.option.groupLabel }}
              </Divider>
            </template>
          </Select>
          <Message severity="error" variant="simple" v-if="errors.sectionId?.length">{{
            errors.sectionId
          }}</Message>
        </div>
      </div>
      <Divider align="left" type="solid">
        <p class="font-bold font-stretch-extra-expanded">Credentials</p>
      </Divider>
      <!-- Credentials Input Group -->
      <div class="flex flex-row gap-2">
        <div class="flex w-full flex-col gap-1">
          <label for="username">Username</label>
          <InputText
            id="username"
            type="text"
            size="small"
            fluid
            v-model="username"
            :="usernameProps"
            :invalid="errors.username?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.username?.length">{{
            errors.username
          }}</Message>
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="password">Password</label>
          <Password
            id="password"
            size="small"
            fluid
            prompt-label="Make it easy to remember."
            weakLabel="Nah. Too easy."
            mediumLabel="You sure about that?"
            strongLabel="Better write that down."
            v-model="password"
            :="passwordProps"
            :invalid="errors.password?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.password?.length">{{
            errors.password
          }}</Message>
        </div>
        <div class="flex w-full flex-col gap-1">
          <label for="confirmPassword">Confirm Password</label>
          <InputText
            id="confirmPassword"
            type="password"
            size="small"
            fluid
            v-model="cPassword"
            :="cPasswordProps"
            :invalid="errors.confirmPassword?.length ? true : false"
          />
          <Message severity="error" variant="simple" v-if="errors.confirmPassword?.length">{{
            errors.confirmPassword
          }}</Message>
        </div>
      </div>
      <div class="flex flex-row gap-2 pt-5">
        <Button label="Sign Up" fluid type="submit" />
        <Button fluid severity="info" as-child #="slotProps">
          <RouterLink to="/" :class="slotProps.class">Return</RouterLink>
        </Button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Divider, InputText, Select, AutoComplete, Password, Button, Message } from 'primevue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useRegister } from '@/lib/composables/useRegister'
import { useSectionOptions } from '@/lib/composables/useSectionOptions'

const registerSchema = z
  .object({
    fname: z.string().nonempty('Must not be empty.').min(2, 'Must be at least 2 character').trim(),
    mname: z.string().trim().optional(),
    lname: z.string().nonempty('Must not be empty.').min(2, 'Must be at least 2 character').trim(),
    position: z
      .string()
      .nonempty('Must not be empty.')
      .min(2, 'Must be at least 2 character')
      .trim(),
    sectionId: z.number().min(1, 'Must not be empty.'),
    username: z
      .string()
      .nonempty('Must not be empty.')
      .min(2, 'Must be at least 2 character')
      .trim(),
    password: z
      .string()
      .nonempty('Must not be empty.')
      .min(8, 'Must be at least 8 character')
      .trim(),
    confirmPassword: z
      .string()
      .nonempty('Must not be empty.')
      .min(8, 'Must be at least 8 character')
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

const query = useRegister()
const { groupedSections, isPending } = useSectionOptions()

const { errors, defineField, handleSubmit } = useForm({
  name: 'register-form',
  validationSchema: toTypedSchema(registerSchema),
  initialValues: {
    fname: '',
    mname: '',
    lname: '',
    position: '',
    username: '',
    password: '',
    confirmPassword: '',
    sectionId: 0,
  },
})

const [fname, fnameProps] = defineField('fname')
const [mname, mnameProps] = defineField('mname')
const [lname, lnameProps] = defineField('lname')
const [position, positionProps] = defineField('position')
const [sectionId, sectionIdProps] = defineField('sectionId')
const [username, usernameProps] = defineField('username')
const [password, passwordProps] = defineField('password')
const [cPassword, cPasswordProps] = defineField('confirmPassword')

const submitHandler = handleSubmit((values) => {
  query.mutate(values)
})
</script>

<style scoped></style>
