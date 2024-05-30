import './App.css'
import { MenuIcon } from './components/Icons'
import TranslateBox from './components/TranslateBox'
import { NavLinks } from './constants'

interface LinkProps {
  id: string
  to: string
  icon: () => JSX.Element
  name: string
}

const App = () => {
  return (
    <>
      <header className="header">
        <a href="#">
          <h1 className="header__title">TranslateApp</h1>
        </a>

        <MenuIcon />
      </header>
      <main>
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
