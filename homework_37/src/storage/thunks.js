import todosSlice from './todosSlice'

const backUp = (getState) => {
  const todos = getState().todos

  window.localStorage.setItem('todos', JSON.stringify(todos))
}

const thunkFetch = (dispatch, getState) => {
  const todos = JSON.parse(
    window.localStorage.getItem('todos')
  )

  dispatch(todosSlice.actions.replaceItems(todos || []))
}

const addItem = (task) => (dispatch, getState) => {
  const newItem = {
    id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
    body: task,
    isFinished: false
  }

  dispatch(todosSlice.actions.addItem(newItem))
  backUp(getState)
}

const removeItem = (id) => (dispatch, getState) => {
  dispatch(todosSlice.actions.removeItem(id))
  backUp(getState)
}

const editItem = (itemToEdit) => (dispatch, getState) => {
  dispatch(todosSlice.actions.editItem(itemToEdit))
  backUp(getState)
}

const thunkClearAll = (dispatch, getState) => {
  dispatch(todosSlice.actions.replaceItems([]))
  backUp(getState)
}

export { thunkFetch, addItem, removeItem, editItem, thunkClearAll }
