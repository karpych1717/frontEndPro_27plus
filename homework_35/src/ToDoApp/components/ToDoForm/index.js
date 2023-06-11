import { useDispatch } from 'react-redux'

import styles from './styles.module.css'

import { todoSlice } from '../../store'

function ToDoForm () {
  console.log(todoSlice)
  const dispatch = useDispatch()

  function handleSubmit (event) {
    event.preventDefault()

    const task = event.target[0].value

    if (!task) return

    dispatch(todoSlice.actions.addToDo(task))

    event.target[0].value = ''
  }
  return (
    <form
      className={styles.toDoForm}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='task'
        className={styles.mainInput}
      />
      <button type='submit'>Add</button>
      <button type='reset'>Reset</button>
    </form>
  )
}

export default ToDoForm
