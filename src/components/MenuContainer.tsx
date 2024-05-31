import { NavLink } from 'react-router-dom'
import { NavLinks } from '../constants'
import { NavLinkProps } from '../types.d'

const MenuContainer = () => {
  return (
    <nav>
      <ul>
        {NavLinks.map(({ id, to, icon, name }: NavLinkProps) => (
          <li key={id}>
            <NavLink to={`/${to}`}>
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
