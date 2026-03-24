import { createFileRoute } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import RegisterPage from '#/pages/RegisterPage'
import { sectionsList } from '#/lib/queryOptions'

const queryClient = new QueryClient()

export const Route = createFileRoute('/register')({
  loader: () => queryClient.ensureQueryData(sectionsList),
  component: RegisterPage,
})
