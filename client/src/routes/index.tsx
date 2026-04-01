import { createFileRoute, redirect, isRedirect } from '@tanstack/react-router'
import { verifyToken } from '#/utils/queryOptions'
import LoginPage from '#/pages/LoginPage'

export const Route = createFileRoute('/')({
  component: LoginPage,
  beforeLoad: async ({ context }) => {
    const token = localStorage.getItem('access_token') ?? undefined
    if (token) {
      try {
        const { data: verified } = await context.queryClient.ensureQueryData(verifyToken)
        if (verified) {
          throw redirect({ to: '/home' })
        }
      } catch (err) {
        if (isRedirect(err)) {
          throw err
        }
        localStorage.removeItem('access_token')
      }
    }
  },
})
