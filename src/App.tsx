import './App.css'
import { MenuIcon, XIcon } from './components/Icons'
import TranslateBox from './components/TranslateBox'
import { NavLinks } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './state/store'
import { setMenu } from './state/menu/menuSlice'
import { LinkProps } from './types.d'
import MenuContainer from './components/MenuContainer'

const App = () => {
  const menuStatus = useSelector((state: RootState) => state.menu.isOpen)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setMenu(!menuStatus))
  }

  return (
    <>
      <header className="header">
        <a href="#">
          <h1 className="header__title">EasyTranslate</h1>
        </a>
        <i className="header__icon" onClick={handleClick}>
          {!menuStatus ? <MenuIcon /> : <XIcon />}
        </i>
      </header>
      <main>
        <article className="menu" style={menuStatus ? { right: 0 } : {}}>
          <MenuContainer />
        </article>
        <article className="container">
          <TranslateBox />
        </article>
      </main>
      <footer className="footer">
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
      </footer>
    </>
  )
}

export default App
