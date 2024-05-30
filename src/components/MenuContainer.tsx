import { NavLinks } from '../constants'
import { LinkProps } from '../types.d'

const MenuContainer = () => {
  return (
    <nav>
      <ul>
        {NavLinks.map((link: LinkProps) => (
          <li key={link.id}>
            <a href={link.to}>{link.icon()}</a>
            <span>{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MenuContainer
