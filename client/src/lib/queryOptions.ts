import { queryOptions } from '@tanstack/react-query'
import axiosAuthInstance from '#/lib/axiosAuth'

export const sectionsList = queryOptions({
  queryKey: ['section_options'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/sections')
  },
})
