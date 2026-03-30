import { axiosAuthInstance } from './axiosAuthInstance'
import { mutationOptions, queryOptions } from '@tanstack/react-query'

export const verifyToken = queryOptions({
  queryKey: ['valid_token'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/verify_token')
  },
  retry: false,
})

export const sectionListQuery = queryOptions({
  queryKey: ['section_list'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/sections')
  },
  retry: false,
})

export const userRoleQuery = queryOptions({
  queryKey: ['user_role'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/roles/auth/system/1')
  },
  retry: false,
})

export const userProfileQuery = queryOptions({
  queryKey: ['user_profile'],
  queryFn: async () => {
    return await axiosAuthInstance.get('/auth/verify')
  },
  retry: false,
})

export const logOutQuery = mutationOptions({
  mutationKey: ['logout'],
  mutationFn: async () => {
    return await axiosAuthInstance.post('/auth/logout')
  },
  retry: false,
})
