import { axiosAuthInstance } from './axiosAuthInstance'
import { queryOptions } from '@tanstack/react-query'

export const sectionListQuery = queryOptions({
  queryKey: ['section_list'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/sections')
  },
})

export const userRoleQuery = queryOptions({
  queryKey: ['user_role'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/roles/auth')
  },
})

export const userProfileQuery = queryOptions({
  queryKey: ['user_profile'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/verify')
  },
})
