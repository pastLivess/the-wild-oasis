import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { styled } from 'styled-components'

const AppLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

const Main = styled.div`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  /* overflow: scroll; */
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  max-width: 120rem;
  margin: 0 auto;
`

export default function AppLayout() {
  return (
    <AppLayoutWrapper>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </AppLayoutWrapper>
  )
}
