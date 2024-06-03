import { useSelector } from 'react-redux'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { RootState } from '../app/store'
import Footer from '../components/Footer'
import FavoriteBox from '../components/FavoriteBox'

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
          <h1 className="favorites-title">Favorites</h1>
          <section className="favorites">
            {favoritesList.length > 0 ? (
              favoritesList.map((favorite, index) => (
                <FavoriteBox
                  key={index}
                  favorite={favorite.favorite}
                  language={favorite.language}
                  id={favorite.id}
                />
              ))
            ) : (
              <p className="favorites--empty">No favorites yet.</p>
            )}
          </section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default FavoritesPage
