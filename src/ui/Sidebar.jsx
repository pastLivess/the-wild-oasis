import { styled } from 'styled-components'
import Logo from './Logo'
import MainNav from './MainNav'
import Uploader from '../data/Uploader'
const SidebarWrapper = styled.div`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
export default function Sidebar() {
  return (
    <SidebarWrapper>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </SidebarWrapper>
  )
}