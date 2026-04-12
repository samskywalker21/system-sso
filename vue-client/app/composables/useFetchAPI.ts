export const useFetchAPI = createUseFetch((callerOptions) => ({
  baseURL: useRuntimeConfig().public.apiURL,
  credentials: 'include',
  ...callerOptions
}))
