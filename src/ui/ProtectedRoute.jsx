import React, { useEffect } from 'react'
import { useUser } from '../components/authentication/useUser'
import Spinner from './Spinner'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-grey-50);
`
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate()
  const { isLoading, isAuthenticated } = useUser()

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login')
  }, [isLoading, isAuthenticated, navigate])

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    )

  if (isAuthenticated) return children
}
