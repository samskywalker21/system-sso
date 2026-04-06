import { useMutation } from '@tanstack/vue-query'
import api from '../api'

interface IRegister {
  fname: string
  lname: string
  position: string
  username: string
  password: string
  mname?: string | undefined
}

export const useRegister = () => {
  const query = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: IRegister) => {
      return await api.post('/auth/register', data)
    },
  })

  return query
}
