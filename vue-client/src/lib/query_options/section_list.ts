import { queryOptions } from '@tanstack/vue-query'
import api from '../api'

export const sectionList = queryOptions({
  queryKey: ['section_options'],
  queryFn: async () => {
    const res = await api.get('/auth/sections')

    return res.data.data
  },
})
