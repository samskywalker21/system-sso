import vine from '@vinejs/vine'

export const LoginValidator = vine.create({
  username: vine.string().trim(),
  password: vine.string().trim(),
})
