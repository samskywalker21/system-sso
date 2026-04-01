import { createFileRoute, redirect } from '@tanstack/react-router'
import { userRoleQuery, userProfileQuery } from '#/utils/queryOptions'
import DashboardLayout from '#/components/layouts/DashboardLayout'

export const Route = createFileRoute('/_dashboard')({
  component: DashboardLayout,
  beforeLoad: () => {
    if (!localStorage.getItem('access_token')) {
      throw redirect({ to: '/' })
    }
  },
  loader: async ({ context }) => {
    try {
      await context.queryClient.ensureQueryData(userRoleQuery)
      await context.queryClient.ensureQueryData(userProfileQuery)
    } catch (err) {
      throw redirect({ to: '/' })
    }
  },
})
