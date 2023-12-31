import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function useLogin() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(['user'], user.user)
      navigate('/dashboard', { replace: true })
    },
    onError: () => {
      console.log('error', err)
      toast.error('provided email or password incorrect')
    },
  })
  return { login, isLoading }
}
