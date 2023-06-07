import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer: {
    // count
  }
})

export { store, counterSlice }
