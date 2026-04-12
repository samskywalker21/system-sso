export const useAPI = () => {
  return $fetch.create({
    baseURL: useRuntimeConfig().public.apiURL,
    credentials: 'include'
  })
}
