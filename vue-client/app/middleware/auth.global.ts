export default defineNuxtRouteMiddleware(async (to) => {
  const api = useAPI()

  if (to.name !== 'login' && to.name !== 'register') {
    try {
      await api('/auth/verify_token', {
        baseURL: useRuntimeConfig().public.apiURL,
        retry: false
      })
    } catch (e) {
      return await navigateTo('/login')
    }
  }
})
