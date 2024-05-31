import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from '../../App'

describe('Translate page testing', () => {
  it('Should render properly', async () => {
    const user = userEvent.setup()
    const mockStore = configureStore([])
    const initialState = {
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
    }
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const textAreaInput = screen.getByPlaceholderText('Enter Text...')
    await user.type(textAreaInput, 'Hola mundo')
    expect(textAreaInput).toBe('Hello World')
  })
})
