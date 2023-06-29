import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  }
})

export default hotelsSlice
