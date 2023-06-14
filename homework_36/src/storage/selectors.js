const selectItemById = (id) => (state) => {
  const item = state.todos.find(item => item.id === id)
  return item
}

const selectIdArray = (state) => {
  console.log(state.todos)
  const array = state.todos.map(item => item.id)
  return array
}

const selectAmount = (state) => {
  return state.todos.length
}

export { selectItemById, selectIdArray, selectAmount }
