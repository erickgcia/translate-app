import { useDispatch } from 'react-redux'
import { Favorite } from '../types'
import { XIcon } from './Icons'
import { removeFavorite } from '../app/favorites/favoritesSlice'

const FavoriteBox = ({ favorite, language, id }: Favorite) => {
  const dispatch = useDispatch()
  const handleRemoveClick = () => {
    dispatch(removeFavorite(id))
  }

  return (
    <section className="favorite-box">
      <p>{language}</p>
      <strong>{favorite}</strong>
      <i className="icon" onClick={handleRemoveClick}>
        <XIcon />
      </i>
    </section>
  )
}

export default FavoriteBox
