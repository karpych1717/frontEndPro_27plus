import { useState } from 'react'

function ToDoInput (props) {
  const [task, setTask, handleNewTaskChange] = useNewTask('')

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
        onChange={handleNewTaskChange}
        required
      />
      <button type='submit' disabled={task.length === 0}>Add</button>
      <button type='reset' disabled={task.length === 0}>Reset</button>
    </form>
  )

  function handleSubmit (event) {
    event.preventDefault()

    props.addToDo(task)

    setTask('')
  }

  function handleReset () {
    setTask('')
  }
}

function useNewTask (defaultValue) {
  const [task, setTask] = useState(defaultValue)

  function handleNewTaskChange (event) {
    setTask(event.target.value.trim())
  }

  return [task, setTask, handleNewTaskChange]
}

export default ToDoInput
