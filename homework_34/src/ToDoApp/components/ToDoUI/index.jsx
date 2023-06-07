import ToDoForm from '../ToDoForm'
import ToDoList from '../ToDoList'
import Fooooter from '../Foooooter'

import styles from './styles.module.css'

function ToDoUI () {
  return (
    <div className={styles.toDoApp}>
      <header><h1>ToDo</h1></header>

      <ToDoForm />
      <ToDoList />

      <Fooooter />
    </div>
  )
}

export default ToDoUI
