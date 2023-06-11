import { createSlice } from "@reduxjs/toolkit";
// immutable

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        // items: immutable.List([])
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload;
            // state.set('1')
        },
        removeItem: (state, action) => {
            const id = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(itemIndex, 1);
        }
    }
})

export const todosSelectors = {
    items: (state) => state.todos.items, // toJS() List => []
    length: (state) => state.todos.items.length,
}

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
