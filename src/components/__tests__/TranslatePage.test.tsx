import { describe, expect, it } from 'vitest'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import TranslatePage from '../../pages/TranslatePage'
import { MemoryRouter } from 'react-router-dom'
import { userEvent } from '@testing-library/user-event'

describe('Translate page testing', () => {
  it('Should render the language selector box', async () => {
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
    }
    const store = mockStore(mockInitialState)
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TranslatePage />
        </MemoryRouter>
      </Provider>
    )

    const languageInputSelector = screen.getByText('Detect language')
    expect(languageInputSelector).toBeInTheDocument()
  })

  it('Should display the language options', async () => {
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
    }
    const store = mockStore(mockInitialState)
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TranslatePage />
        </MemoryRouter>
      </Provider>
    )

    const languageInputSelector = screen.getByText('Detect language')

    act(() => {
      fireEvent.click(languageInputSelector)
    })

    await waitFor(() => {
      const options = screen.getAllByRole('option')
      expect(options[1]).toHaveTextContent('English')
      expect(options[2]).toHaveTextContent('Español')
      expect(options[3]).toHaveTextContent('Français')
    })
  })

  it('Should translate when the user type anything to the language selected', async () => {
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
    }
    const store = mockStore(mockInitialState)
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TranslatePage />
        </MemoryRouter>
      </Provider>
    )

    const textArea = screen.getByPlaceholderText('Enter Text')
    expect(textArea).toBeInTheDocument()

    userEvent.type(textArea, 'Hola')
    setTimeout(async () => {
      const output = screen.getByPlaceholderText('Translation')
      expect(output).toHaveTextContent('Hello')
    }, 3000)
  })
})
