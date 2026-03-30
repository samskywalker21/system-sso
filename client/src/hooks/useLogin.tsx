import { useMutation } from '@tanstack/react-query'
import { axiosAuthInstance } from '#/utils/axiosAuthInstance'
import { notifications } from '@mantine/notifications'
import type { ILoginForm } from '#/utils/Interfaces'
import { useNavigate } from '@tanstack/react-router'

const useLogin = () => {
  const nav = useNavigate({ from: '/' })

  const query = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: ILoginForm) => {
      return await axiosAuthInstance.post('/auth/login', data)
    },
    onSuccess(data) {
      localStorage.setItem('access_token', data.data)
      notifications.show({
        id: 'login-notif',
        position: 'top-right',
        withCloseButton: false,
        title: 'Success!',
        message: 'Redirecting to the Home...',
        color: 'green',
      })
      setTimeout(() => nav({ to: '/home' }), 3000)
    },
    onError() {
      notifications.show({
        id: 'login-notif',
        position: 'top-right',
        withCloseButton: false,
        title: 'Error!',
        message: 'Credentials are invalid.',
        color: 'red',
      })
    },
  })

  return query
}

export default useLogin
