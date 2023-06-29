import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    }
  }
})

export default destinationsSlice
