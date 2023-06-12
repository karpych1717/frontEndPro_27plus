import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    replaceItems: (state, action) => {
      state.items = action.payload
    },
    removeItem: (state, action) => {
      const id = action.payload
      const itemIndex = state.items.findIndex(item => item.id === id)
      state.items.splice(itemIndex, 1)
    }
  }
})

export default todosSlice
