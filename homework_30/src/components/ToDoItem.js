import { useState } from 'react'

function ToDoItem (props) {
  const [isEditable, setEditable] = useState(false)

  return isEditable
    ? (
      <form
        className='toDoItem'
        onSubmit={handleSaveEdit}
        onReset={handleDiscardEdit}
      >
        <input type='text' defaultValue={props.body.task} />
        <button type='submit'>Save</button>
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

  function handleRemoveToDo () {
    props.removeToDo(props.body.id)
  }

  function handleToggleFinished () {
    props.toggleFinished(props.body.id)
  }

  function handleToggleEditable () {
    setEditable(!isEditable)
  }

  function handleSaveEdit (event) {
    event.preventDefault()

    const id = props.body.id
    const newTask = event.target.elements[0].value.trim()

    props.saveEditToDo(id, newTask)

    handleToggleEditable()
  }

  function handleDiscardEdit () {
    handleToggleEditable()
  }
}

export default ToDoItem
