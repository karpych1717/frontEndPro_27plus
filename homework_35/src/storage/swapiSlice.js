import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isFull: false,
  body: {}
}

const swapiSlice = createSlice({
  name: 'swapi',
  initialState,
  reducers: {
    fill: (state, action) => {
      const { request, data } = action.payload

      state.body = { request, data }
      state.isFull = true
    },
    clear: (state) => {
      state.body = {}
      state.isFull = false
    }
  }
})

export default swapiSlice
