import { styled } from 'styled-components'
import Logout from '../components/authentication/Logout'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../components/authentication/UserAvatar'

const HeaderWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`

export default function Header() {
  return (
    <HeaderWrapper>
      <UserAvatar />
      <HeaderMenu />
    </HeaderWrapper>
  )
}
