import { MenuState } from '../types'
import MenuContainer from './MenuContainer'

const Menu = ({ isOpen }: MenuState) => {
  return (
    <article className="menu" style={isOpen ? { right: 0, opacity: 1 } : {}}>
      <MenuContainer />
    </article>
  )
}

export default Menu
