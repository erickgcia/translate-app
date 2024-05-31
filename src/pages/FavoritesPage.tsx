import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { RootState } from '../app/store'

const FavoritesPage = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen)
  return (
    <>
      <Header isOpen={isOpen} />
      <main>
        <Menu isOpen={isOpen} />
        <article className="container"></article>
      </main>
    </>
  )
}

export default FavoritesPage
