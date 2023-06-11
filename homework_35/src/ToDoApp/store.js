import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTask = {
        id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
        task: action.payload
      }

      state.todos = [...state.todos, newTask]
    }
  }
})

const addToDo = todoSlice.reducer

const store = configureStore({
  reducer: addToDo
})

export { store, todoSlice }
