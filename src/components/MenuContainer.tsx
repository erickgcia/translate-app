import { NavLink } from 'react-router-dom'
import { NavLinks } from '../constants'
import { NavLinkProps } from '../types.d'
import { useDispatch } from 'react-redux'
import { setMenu } from '../app/menu/menuSlice'

const MenuContainer = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setMenu(false))
  }
  return (
    <nav>
      <ul>
        {NavLinks.map(({ id, to, icon, name }: NavLinkProps) => (
          <li key={id}>
            <NavLink onClick={handleClick} to={`/${to}`}>
              <i>{icon()}</i>
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuContainer
