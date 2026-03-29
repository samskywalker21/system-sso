import { createFileRoute } from '@tanstack/react-router'
// import { QueryClient } from '@tanstack/react-query'
import { sectionListQuery } from '#/utils/queryOptions'
import RegisterPage from '#/pages/RegisterPage'

// const queryClient = new QueryClient()

export const Route = createFileRoute('/register')({
  loader: ({ context }) => context.queryClient.ensureQueryData(sectionListQuery),
  component: RegisterPage,
})
