import vine from '@vinejs/vine'

export const InsertUserValidator = vine.create({
  fname: vine.string().minLength(3).trim(),
  mname: vine.string().minLength(3).trim().optional(),
  lname: vine.string().minLength(3).trim(),
  username: vine.string().minLength(3).trim(),
  password: vine.string().minLength(6).trim(),
  position: vine.string().minLength(3).trim(),
  section_id: vine.number(),
  status: vine.enum(['A', 'I']).optional(),
})

export const UpdateUserValidator = vine.create({
  fname: vine.string().minLength(3).trim().optional(),
  mname: vine.string().minLength(3).trim().optional(),
  lname: vine.string().minLength(3).trim().optional(),
  username: vine.string().minLength(3).trim().optional(),
  password: vine.string().minLength(6).trim().optional(),
  position: vine.string().minLength(3).trim().optional(),
  section_id: vine.number().optional(),
  status: vine.enum(['A', 'I']).optional(),
  params: vine.object({
    id: vine.number(),
  }),
})
