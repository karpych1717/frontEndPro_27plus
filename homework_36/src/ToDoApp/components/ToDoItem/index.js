import { useState } from 'react'

import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectItemById } from '../../../storage/selectors'
import { editItem, removeItem } from '../../../storage/thunks'

function ToDoItem (props) {
  const taskByID = useSelector(selectItemById(props.id))
  const [body, setBody] = useState(taskByID.body)

  const [isEditable, setEditable] = useState(false)

  const dispatch = useDispatch()

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
          value={body}
          onChange={handleBodyChange}
        />
        <button className={styles.itemButton} type='submit' disabled={body.trim() === taskByID.body}>Save</button>
        <button className={styles.itemButton} type='reset'>Reset</button>
      </form>
      )
    : (
      <div className={styles.toDoItem}>
        <input
          type='checkbox'
          checked={taskByID.isFinished}
          onChange={handleToggleFinished}
        />
        <span
          className={
            `${styles.itemSpan} ${
              taskByID.isFinished
                ? styles.striked
                : ''
            }`
        }
        >
          {taskByID.body}
        </span>
        <button onClick={handleToggleEditable}>Edit</button>
        <button onClick={handleRemoveToDo}>Delete</button>
      </div>
      )

  function handleSaveEdit (event) {
    event.preventDefault()

    const editedItem = {
      ...taskByID,
      body: event.target[0].value.trim()
    }

    dispatch(editItem(editedItem))
    setEditable(!isEditable)
  }

  function handleBodyChange (event) {
    setBody(event.target.value.trim())
  }

  function handleToggleFinished () {
    const editedItem = {
      ...taskByID,
      isFinished: !taskByID.isFinished
    }

    dispatch(editItem(editedItem))
  }

  function handleToggleEditable () {
    setEditable(!isEditable)
  }

  function handleDiscardEdit () {
    handleToggleEditable()
  }

  function handleRemoveToDo () {
    dispatch(removeItem(props.id))
  }
}

export default ToDoItem
