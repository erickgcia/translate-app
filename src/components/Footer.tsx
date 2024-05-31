import { Link } from 'react-router-dom'
import { NavLinks } from '../constants'
import { NavLinkProps } from '../types.d'

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  )
}

export default Footer
