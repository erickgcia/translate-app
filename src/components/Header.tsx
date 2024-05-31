import { Link } from 'react-router-dom'
import { MenuState } from '../types'
import { MenuIcon, XIcon } from './Icons'
import { useDispatch } from 'react-redux'
import { setMenu } from '../state/menu/menuSlice'

const Header = ({ isOpen }: MenuState) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setMenu(!isOpen))
  }
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">EasyTranslate</h1>
      </Link>

      <i className="header__icon" onClick={handleClick}>
        {!isOpen ? <MenuIcon /> : <XIcon />}
      </i>
    </header>
  )
}

export default Header
