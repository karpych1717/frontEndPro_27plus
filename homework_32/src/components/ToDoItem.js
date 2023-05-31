import { useState } from 'react'

function ToDoItem (props) {
  const [isEditable, setEditable] = useState(false)
  const [task, setTask] = useState(props.body.task)

  return isEditable
    ? (
      <form
        className='toDoItem'
        onSubmit={handleSaveEdit}
        onReset={handleDiscardEdit}
      >
        <input
          type='text'
          value={task}
          onChange={handleTaskChange}
        />
        <button type='submit' disabled={task === props.body.task}>Save</button>
        <button type='reset'>Reset</button>
      </form>
      )
    : (
      <div className='toDoItem'>
        <span
          className={props.body.isFinished ? 'striked' : ''}
        >
          {props.body.task}
        </span>
        <input
          type='checkbox'
          checked={props.body.isFinished}
          onChange={handleToggleFinished}
        />
        <button onClick={handleToggleEditable}>Edit</button>
        <button onClick={handleRemoveToDo}>Delete</button>
      </div>
      )

  function handleTaskChange (event) {
    const _task = event.target.value

    setTask(_task.trim())
  }

  function handleRemoveToDo () {
    props.removeToDo(props.body.id)
  }

  function handleToggleFinished () {
    props.toggleFinished(props.body.id)
  }

  function handleSaveEdit (event) {
    event.preventDefault()

    const id = props.body.id

    props.saveEditToDo(id, task.trim())

    handleToggleEditable()
  }

  function handleDiscardEdit () {
    handleToggleEditable()
  }

  function handleToggleEditable () {
    setEditable(!isEditable)
  }
}

export default ToDoItem
