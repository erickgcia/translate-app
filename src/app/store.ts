import { configureStore } from '@reduxjs/toolkit'
import translateReducer from './translate/translateSlice'
import menuReducer from './menu/menuSlice'
import favoritesReducer from './favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    translate: translateReducer,
    menu: menuReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
