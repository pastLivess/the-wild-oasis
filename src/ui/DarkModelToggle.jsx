import { useDarkMode } from '../context/DarkModeContext'
import ButtonIcon from './ButtonIcon'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
export default function DarkModelToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}
