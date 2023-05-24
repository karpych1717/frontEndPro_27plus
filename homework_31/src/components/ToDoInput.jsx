function ToDoInput (props) {
  return (
    <form
      className='toDoInput'
      onSubmit={handleAddToDo}
    >
      <input type='text' placeholder='task' required />
      <button type='submit'>Add</button>
      <button type='reset'>Reset</button>
    </form>
  )

  function handleAddToDo (event) {
    event.preventDefault()

    const _input = event.target.elements[0]
    const newTask = _input.value.trim()
    _input.value = ''

    props.addToDo(newTask)
  }
}

export default ToDoInput
