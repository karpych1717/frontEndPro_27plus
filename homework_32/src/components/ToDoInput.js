import { useState } from 'react'

function ToDoInput (props) {
  const [task, setTask] = useState('')

  return (
    <form
      className='toDoInput'
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <input
        type='text'
        placeholder='task'
        value={task}
        onChange={handleTaskChange}
        required
      />
      <button type='submit' disabled={task.length === 0}>Add</button>
      <button type='reset'>Reset</button>
    </form>
  )

  function handleTaskChange (event) {
    const _task = event.target.value

    setTask(_task.trim())
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('submit')

    props.addToDo(task.trim())

    event.target.reset()
  }

  function handleReset (event) {
    setTask('')
  }
}

export default ToDoInput
