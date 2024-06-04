import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'
import FavoritesPage from '../../pages/FavoritesPage'

describe('Favorite Page Testing', () => {
  it('Should render properly', async () => {
    const mockStore = configureStore([])
    const mockInitialState = {
      translate: {
        langInput: 'auto',
        langOutput: 'en',
        text: '',
        resultText: '',
        loading: false,
      },
      menu: {
        isOpen: false,
      },
      favorites: {
        favoritesList: [],
        favoritesCount: 0,
      },
    }
    const store = mockStore(mockInitialState)
    render(
      <Provider store={store}>
        <MemoryRouter>
          <FavoritesPage />
        </MemoryRouter>
      </Provider>
    )
    const emptyBag = screen.getByText('No favorites yet.')
    expect(emptyBag).toBeInTheDocument()
  })
})
