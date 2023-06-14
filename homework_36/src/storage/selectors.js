const selectItemById = (id) => (state) => {
  const item = state.todos.find(item => item.id === id)
  return item
}

const getIdArray = (state) => {
  console.log(state.todos)
  const array = state.todos.map(item => item.id)
  return array
}

export { selectItemById, getIdArray }
