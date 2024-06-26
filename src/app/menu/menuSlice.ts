import { createSlice } from '@reduxjs/toolkit'
import { MenuState } from '../../types'

const initialState: MenuState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setMenu } = menuSlice.actions
export default menuSlice.reducer
