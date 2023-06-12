import { configureStore, combineReducers } from '@reduxjs/toolkit'
import swapiSlice from './swapiSlice'
import todoSlice from './todoSlice'

const combinedReducer = combineReducers({
  swapiSlice: swapiSlice.reducer,
  todoSlice: todoSlice.reducer
})

const store = configureStore({
  reducer: combinedReducer
})

export default store