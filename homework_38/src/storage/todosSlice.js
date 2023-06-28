import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    replaceItems: (state, action) => {
      state.todos = action.payload
    },
    addItem: (state, action) => {
      const newItem = action.payload
      state.todos.push(newItem)
    },
    removeItem: (state, action) => {
      const id = action.payload
      const itemIndex = state.todos.findIndex(item => item.id === id)
      state.todos.splice(itemIndex, 1)
    },
    editItem: (state, action) => {
      const editedItem = action.payload
      const itemIndex = state.todos.findIndex(item => item.id === editedItem.id)
      state.todos.splice(itemIndex, 1, editedItem)
    }
  }
})

export default todosSlice
