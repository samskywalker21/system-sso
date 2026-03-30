import { createFileRoute, redirect } from '@tanstack/react-router'
import { verifyToken } from '#/utils/queryOptions'
import LoginPage from '#/pages/LoginPage'

export const Route = createFileRoute('/')({
  component: LoginPage,
  beforeLoad: async ({ context }) => {
    if (localStorage.getItem('access_token')) {
      const { data: verified } = await context.queryClient.ensureQueryData(verifyToken)
      if (verified) {
        throw redirect({ to: '/home' })
      }
    }
  },
})
