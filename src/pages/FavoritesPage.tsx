import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { RootState } from '../app/store'

const FavoritesPage = () => {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen)
  const favoritesList = useSelector(
    (state: RootState) => state.favorites.favoritesList
  )
  return (
    <>
      <Header isOpen={isOpen} />
      <main>
        <Menu isOpen={isOpen} />
        <article className="container">
          {favoritesList.length <= 0 ? (
            <p className="favorites--empty">You don't have any favorites yet</p>
          ) : (
            'Hello world'
          )}
        </article>
      </main>
    </>
  )
}

export default FavoritesPage
