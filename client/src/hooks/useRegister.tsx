import { useMutation } from '@tanstack/react-query'
import { axiosAuthInstance } from '#/utils/axiosAuthInstance'
import type { IRegistrationFrom } from '#/utils/Interfaces'
import { notifications } from '@mantine/notifications'

const useRegister = () => {
  const query = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: IRegistrationFrom) => {
      return await axiosAuthInstance.post('/auth/register', data)
    },
    onSuccess() {
      notifications.show({
        id: 'login-notif',
        position: 'top-right',
        withCloseButton: false,
        title: 'Success!',
        message: 'Please contact the ICTU for account activation.',
        color: 'green',
      })
    },
    onError() {
      notifications.show({
        id: 'login-notif',
        position: 'top-right',
        withCloseButton: false,
        title: 'Error!',
        message: 'Something went wrong.',
        color: 'red',
      })
    },
  })

  return query
}

export default useRegister
