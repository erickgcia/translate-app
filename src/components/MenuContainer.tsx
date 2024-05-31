import { Link } from 'react-router-dom'
import { NavLinks } from '../constants'
import { NavLinkProps } from '../types.d'

const MenuContainer = () => {
  return (
    <nav>
      <ul>
        {NavLinks.map(({ id, to, icon, name }: NavLinkProps) => (
          <li key={id}>
            <Link to={`/${to}`}>{icon()}</Link>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuContainer
