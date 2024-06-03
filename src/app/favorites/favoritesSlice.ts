import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Favorite, FavoritesState } from '../../types.d'

const initialState: FavoritesState = {
  favoritesList: [],
  favoritesCount: 0,
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      state.favoritesList = [...state.favoritesList, action.payload]
      state.favoritesCount += 1
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoritesList = state.favoritesList.filter(
        (favorite) => favorite.id !== action.payload
      )
    },
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
