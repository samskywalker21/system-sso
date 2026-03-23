import { useMutation } from '@tanstack/react-query'
import axiosAuthInstance from '#/lib/axiosAuth'
import useProfile from './useProfile'

interface LoginFormData {
  username: string
  password: string
}

const useLogin = () => {
  const profileQuery = useProfile()

  const query = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginFormData) => {
      return await axiosAuthInstance.post('/auth/login', data)
    },
    onSuccess(data) {
      localStorage.setItem('access_token', data.data)
      profileQuery.refetch()
    },
  })

  return query
}

export default useLogin
