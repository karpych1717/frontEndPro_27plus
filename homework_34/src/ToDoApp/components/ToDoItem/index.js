import { useState } from 'react'

import styles from './styles.module.css'

function ToDoItem (props) {
  const [isEditable, setEditable] = useState(false)
  const [task, handleTaskChange] = useTask(props.body.task)

  return isEditable
    ? (
      <form
        className={styles.toDoItem}
        onSubmit={handleSaveEdit}
        onReset={handleDiscardEdit}
      >
        <input
          className={styles.textInput}
          type='text'
          value={task}
          onChange={handleTaskChange}
        />
        <button className={styles.itemButton} type='submit' disabled={task.trim() === props.body.task}>Save</button>
        <button className={styles.itemButton} type='reset'>Reset</button>
      </form>
      )
    : (
      <div className={styles.toDoItem}>
        <input
          type='checkbox'
          checked={props.body.isFinished}
          onChange={handleToggleFinished}
        />
        <span
          className={
            `${styles.itemSpan} ${
              props.body.isFinished
                ? styles.striked
                : ''
            }`
        }
        >
          {props.body.task}
        </span>
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
