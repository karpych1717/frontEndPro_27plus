import { useState } from 'react'
import useStyles from '../styles.jss.js'

function ToDoItem (props) {
  const classes = useStyles(props)

  const [isEditable, setEditable] = useState(false)
  const [task, handleTaskChange] = useTask(props.body.task)

  return isEditable
    ? (
      <form
        className={classes.toDoItem}
        onSubmit={handleSaveEdit}
        onReset={handleDiscardEdit}
      >
        <input
          className={classes.textInput}
          type='text'
          value={task}
          onChange={handleTaskChange}
        />
        <button className={classes.itemButton} type='submit' disabled={task.trim() === props.body.task}>Save</button>
        <button className={classes.itemButton} type='reset'>Reset</button>
      </form>
      )
    : (
      <div className={classes.toDoItem}>
        <span
          className={
            `${classes.itemSpan} ${
              props.body.isFinished
                ? classes.striked
                : ''
            }`
        }
        >
          {props.body.task}
        </span>
        <input
          type='checkbox'
          checked={props.body.isFinished}
          onChange={handleToggleFinished}
        />
        <button className={classes.itemButton} onClick={handleToggleEditable}>Edit</button>
        <button className={classes.itemButton} onClick={handleRemoveToDo}>Delete</button>
      </div>
      )

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

function useTask (defaultTask) {
  const [task, setTask] = useState(defaultTask)

  function handleChange (event) {
    setTask(event.target.value)
  }

  return [task, handleChange]
}

export default ToDoItem
