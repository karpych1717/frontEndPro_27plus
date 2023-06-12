import { configureStore, combineReducers } from '@reduxjs/toolkit'
import swapiSlice from './swapiSlice'
import todosSlice from './todosSlice'

const combinedReducer = combineReducers({
  swapi: swapiSlice.reducer,
  todos: todosSlice.reducer
})

const store = configureStore({
  reducer: combinedReducer
})

export default store
