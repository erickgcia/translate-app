import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type LanguagePayload, type translateState } from '../../types.d'

const initialState: translateState = {
  langInput: 'auto',
  langOutput: 'en',
  text: '',
  resultText: '',
  loading: false,
}

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    switchLanguage: (state) => {
      if (state.langInput === 'auto') return state
      const box = state.langInput
      state.langInput = state.langOutput
      state.langOutput = box
    },
    setLanguage: (state, action: PayloadAction<LanguagePayload>) => {
      switch (action.payload.location) {
        case 'langInput':
          state.langInput = action.payload.value
          break
        case 'langOutput':
          state.langOutput = action.payload.value
          break
      }
    },
    setText: (state, action: PayloadAction<string>) => {
      state.loading = true
      state.resultText = ''
      state.text = action.payload
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.resultText = action.payload
      state.loading = false
    },
  },
})

export const { switchLanguage, setLanguage, setText, setResult } =
  translateSlice.actions

export default translateSlice.reducer
