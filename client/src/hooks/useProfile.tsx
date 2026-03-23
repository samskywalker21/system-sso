import { useQuery } from '@tanstack/react-query'
import axiosAuthInstance from '#/lib/axiosAuth'

const useProfile = () => {
  const query = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      return await axiosAuthInstance.get('/auth/verify')
    },
    enabled: !!localStorage.getItem('access_token'),
    retry: false,
  })

  return query
}

export default useProfile
