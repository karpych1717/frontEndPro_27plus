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

// export const todosSelectors = {
//   items: (state) => state.todos.items, // toJS() List => []
//   length: (state) => state.todos.items.length
// }

export const todosActions = todosSlice.actions

export default todosSlice.reducer
