export const useLogin = () => {
  const api = useAPI()
  const status = ref<'idle' | 'pending' | 'success' | 'fail'>('idle')

  const login = async (payload: { username: string; password: string }) => {
    status.value = 'idle'

    try {
      status.value = 'pending'
      await api('/auth/login', {
        method: 'POST',
        body: payload
      })
      status.value = 'success'
    } catch (e) {
      status.value = 'fail'
    }
  }

  return { status, login }
}
